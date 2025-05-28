import {
    Module,
    Markdown,
    MarkdownEditor,
    customElements,
    customModule,
    ControlElement,
    Container,
    Styles,
    Button,
    Icon
} from '@ijstech/components';
import { Model } from './model/index';
import { customEditorStyle, customListStyles, getMarkdownStyles } from './index.css';
import { IConfig } from './interface';

const Theme = Styles.Theme.ThemeVars;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['i-page-text']: ScomPageTextElement;
        }
    }
}

interface ScomPageTextElement extends ControlElement {
    value?: string;
}

@customModule
@customElements('i-page-text', {
    icon: 'stop',
    props: {
        data: {
            type: 'string',
            default: ''
        }
    },
    className: 'ScomPageText',
    events: {}
})
export default class ScomPageText extends Module {
    private mdViewer: Markdown;
    private mdEditor: MarkdownEditor;
    private model: Model;
    private customStyle: string;

    constructor(parent: Container, options: any) {
        super(parent, options);
    }

    get data() {
        return this.model.data;
    }

    set data(value: string) {
        this.model.data = value;
    }

    get viewer() {
        return this.model.tag?.viewer ?? true;
    }

    private async setData(data: IConfig) {
        this.model.setData(data);
    }

    private onUpdateBlock() {
        this.mdViewer.load(this.model.data);
    }

    private updateMarkdown() {
        const config = this.model.getTag();
        if (this.customStyle) {
            this.mdViewer.classList.remove(this.customStyle);
        }
        if (!config) return;
        this.customStyle = getMarkdownStyles(config);
        this.mdViewer.classList.add(customListStyles, this.customStyle);
    }

    private handleDbClick() {
        if (this.viewer) return;
        this.toggleEditor(true);
        this.mdEditor.value = this.model.data;
    }

    private toggleEditor(value: boolean) {
        this.mdViewer.visible = !value;
        this.mdEditor.visible = value;
        if (value) {
            this.mdEditor.focus();
        }
    }

    getConfigurators() {
       return this.model.getConfigurators();
    }

    private createButton(type: 'cancel' | 'confirm') {
        const isCancel = type === 'cancel';
        const button = document.createElement('i-button') as Button;
        button.icon = new Icon(undefined, {name: isCancel ? 'times' : 'check', fill: isCancel ? Theme.colors.error.main : Theme.colors.success.main, width: 12, height: 12}),
        button.boxShadow = 'none';
        button.background = {color: 'transparent'};
        button.padding = {left: "0.5rem", right: "0.5rem", top: "0.5rem", bottom: "0.5rem"};
        button.width = "auto";
        button.height = '100%';
        button.border = {width: 0};
        button.onClick = (target: Button, event: Event) => {
            event.preventDefault();
            event.stopPropagation();
            this.toggleEditor(false);
            if (!isCancel) {
                const newVal = this.mdEditor?.getMarkdownValue();
                this.data = newVal;
                this._setDesignPropValue('value', newVal);
                const designer = this.closest('i-scom-designer') as any;
                if (designer) designer.renderMD();
            }
        }

        return button;
    }

    async init() {
        super.init();
        this.maxWidth = "100%"
        this.onUpdateBlock = this.onUpdateBlock.bind(this);
        this.updateMarkdown = this.updateMarkdown.bind(this);
        this.model = new Model({
            onUpdateBlock: this.onUpdateBlock,
            onUpdateTheme: this.updateMarkdown
        })
        const value = this.getAttribute('value', true);
        const tag = this.getAttribute('tag', true);
        if (value) {
            this.setData({ value });
        }
        if (tag) {
            this.model.setTag(tag);
        }
        this.mdEditor.toolbarItems = [
             [{
                el: this.createButton('confirm'),
                tooltip: 'Confirm',
                command: 'confirm',
            },
            {
                el: this.createButton('cancel'),
                tooltip: 'Cancel',
                command: 'cancel'
            }],
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
        ]

        document.addEventListener('click', (e) => {
            if (this.viewer) return;
            const target = e.target as HTMLElement;
            const currentText = target.closest('i-page-text');

            if (!currentText || !currentText.isEqualNode(this)) {
                const isButton = target.classList.contains('tui-colorpicker-palette-button') ||
                    target.classList.contains('toastui-editor-toolbar-icons');
                if (!isButton) this.toggleEditor(false);
            }
        });
    }

    render() {
        return (
            <i-panel id={'pnlViewer'} maxWidth={"100%"}>
                <i-markdown
                    id={'mdViewer'}
                    width={'100%'} height={'100%'}
                    onDblClick={this.handleDbClick}
                ></i-markdown>
                <i-markdown-editor
                    id={'mdEditor'}
                    width={'100%'} height={"auto"}
                    minHeight={100}
                    hideModeSwitch={true}
                    viewer={false}
                    mode="wysiwyg"
                    class={customEditorStyle}
                    visible={false}
                ></i-markdown-editor>
            </i-panel>
        )
    }
}
