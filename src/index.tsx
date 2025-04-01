import {
    Module,
    Markdown,
    customElements,
    customModule,
    ControlElement,
    Container
} from '@ijstech/components';
import { Model } from './model/index';
import { getMarkdownStyles } from './index.css';
import { IConfig } from './interface';

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
        this.mdViewer.classList.add(this.customStyle);
    }

    getConfigurators() {
       return this.model.getConfigurators();
    }

    async init() {
        super.init();
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
    }

    render() {
        return (
            <i-panel id={'pnlViewer'}>
                <i-markdown
                    id={'mdViewer'}
                    width={'100%'} height={'100%'}
                    theme='dark'
                ></i-markdown>
            </i-panel>
        )
    }
}
