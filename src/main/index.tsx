import {
    Control,
    Module,
    Panel,
    Input,
    Markdown,
    customElements,
    customModule,
    Styles,
} from '@ijstech/components';
import './index.css';
import { IConfigSchema, PageBlock } from '@markdown/global';

const Theme = Styles.Theme.ThemeVars;

const configSchema: IConfigSchema = {
    type: 'object',
    required: [],
    properties:
        {
            'headerFontColor': {
                type: 'object',
                properties: {
                    'h1': {
                        type: 'string',
                        format: 'color'
                    },
                    'h2': {
                        type: 'string',
                        format: 'color'
                    },
                    'h3': {
                        type: 'string',
                        format: 'color'
                    },
                    'h4': {
                        type: 'string',
                        format: 'color'
                    },
                    'h5': {
                        type: 'string',
                        format: 'color'
                    },
                    'h6': {
                        type: 'string',
                        format: 'color'
                    },
                }
            },
            'headerFontSize': {
                type: 'object',
                properties: {
                    'h1': {
                        type: 'string'
                    },
                    'h2': {
                        type: 'string'
                    },
                    'h3': {
                        type: 'string'
                    },
                    'h4': {
                        type: 'string'
                    },
                    'h5': {
                        type: 'string'
                    },
                    'h6': {
                        type: 'string'
                    }
                }
            },
            'fontColor': {
                type: 'string',
                format: 'color'
            },
            'fontSize': {
                type: 'string'
            },
            'linkFontSize': {
                type: 'string'
            },
            'linkFontColor': {
                type: 'string',
                format: 'color'
            },
            'linkBackgroundColor': {
                type: 'string',
                format: 'color'
            },
            'backgroundColor': {
                type: 'string',
                format: 'color'
            },
            'textAlign': {
                type: 'string',
                enum: [
                    'left',
                    'center',
                    'right'
                ]
            }
        }

};

@customModule
export class MarkdownBlock extends Module implements PageBlock {
    private data: any;
    private tempData: any;
    private txtMarkdown: Input;
    private mdViewer: Markdown;
    private pnlContainer: Panel;
    private pnlMarkdown: Panel;
    private txtMarkdownPnl: Panel;

    tag: any;
    defaultEdit: boolean = true;

    readonly onEdit: () => Promise<void>;
    readonly onConfirm: () => Promise<void>;
    readonly onDiscard: () => Promise<void>;

    async init() {
        super.init();
        this.initEventListener();
    }

    initEventListener() {
        this.txtMarkdown.onKeyDown = (control: Control, event: any) => {
            if (event.ctrlKey && event.keyCode === 13) {
                this.onConfirm();
            }
        };
    }

    async getConfigSchema(): Promise<IConfigSchema> {
        return configSchema;
    }

    async onConfigSave(config: any) {
        this.tag = config;
        this.updateMarkdown(config);
    }

    updateMarkdown(config: any) {
        if(!config) return;
        const {fontColor, backgroundColor, textAlign} = config;
        if(fontColor)
            this.mdViewer.font = {color: fontColor};
        if(backgroundColor)
            this.pnlContainer.background.color = backgroundColor;
        if(textAlign)
            this.mdViewer.style.textAlign = textAlign;
    }

    handleTxtAreaChanged(control: any) {
        this.autoResize(control);
        this.mdPreview();
    }

    autoResize(control: any) {
        const rows = control.value.split('\n').length;
        const lineHeight = 85.94 / 4;
        const minHeight = 600;
        const calcHeight = rows * lineHeight;
        control.height = calcHeight > minHeight ? calcHeight : minHeight;
    }

    mdPreview() {
        // this.setData(this.txtMarkdown.value);
        // this.mdViewer.visible = true;
        this.mdViewer.load(this.txtMarkdown.value);
    }

    getData() {
        return this.data;
    }

    async setData(value: any) {
        this.data = value;
        this.mdViewer.visible = true;
        this.mdViewer.width = '100%';
        this.txtMarkdownPnl.width = 0;
        this.txtMarkdown.visible = false;
        this.mdViewer.load(value);
    }

    getTag() {
        return this.tag;
    }

    async setTag(value: any) {
        this.tag = value;
        this.updateMarkdown(value);
    }

    async edit() {
        this.mdViewer.width = '50%';
        this.txtMarkdownPnl.width = '50%';
        this.txtMarkdown.value = this.data;
        this.txtMarkdown.visible = true;
        this.mdViewer.visible = true;
        this.autoResize(this.txtMarkdown);
    }

    async confirm() {
        this.setData(this.txtMarkdown.value);
        this.mdViewer.visible = true;
        this.mdViewer.width = '100%';
        this.txtMarkdownPnl.width = 0;
        this.txtMarkdown.visible = false;
        this.tempData = this.data;
    }

    async discard() {
        if (!this.data) {
            this.txtMarkdown.value = '';
            return;
        }
        this.data = this.tempData;
        this.txtMarkdown.value = this.tempData;
        this.setData(this.tempData);
        this.mdViewer.visible = true;
        this.mdViewer.width = '100%';
        this.txtMarkdownPnl.width = 0;
        this.txtMarkdown.visible = false;
    }

    validate(): boolean {
        const isValid = !!(this.txtMarkdown.value.trim());
        if (!isValid)
            this.pnlMarkdown.classList.add('invalid');
        else
            this.pnlMarkdown.classList.remove('invalid');
        return isValid;
    }

    async handleMarkdownViewerDblClick() {
        await this.onEdit();
    }

    render() {
        return (
            <i-panel id={'pnlMarkdown'} class={'markdown-container'}>
                <i-hstack width={'100%'} height={'100%'}>
                    <i-panel id={'txtMarkdownPnl'} width={'50%'} height={'100%'}
                             border={{ right: { color: '#6f56f9', width: '1px', style: 'solid' } }}>
                        <i-input
                            id={'txtMarkdown'} class={'markdown-input'}
                            width={'100%'} height={'100%'}
                            inputType={'textarea'} placeholder={'Enter here'} captionWidth={0}
                            font={{ size: Theme.typography.fontSize }}
                            onChanged={this.handleTxtAreaChanged}
                        ></i-input>
                    </i-panel>
                    <i-panel class={'container'} id={'pnlContainer'}>
                        <i-markdown
                            id={'mdViewer'} class={'markdown-viewer'}
                            width={'auto'} height={'auto'}
                            padding={{ top: '10px', bottom: '10px', left: '10px', right: '10px' }}
                            onDblClick={this.handleMarkdownViewerDblClick}
                        ></i-markdown>
                    </i-panel>
                </i-hstack>
            </i-panel>
        );
    }
}
