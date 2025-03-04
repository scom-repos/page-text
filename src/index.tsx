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
@customElements('i-page-text')
export default class ScomPageText extends Module {
    private mdViewer: Markdown;
    private model: Model;
    private customStyle: string;

    constructor(parent: Container, options: any) {
        super(parent, options);
    }

    private getData() {
        return this.model.data;
    }

    private async setData(value: string) {
        this.model.setData(value);
    }

    private onUpdateBlock() {
        this.mdViewer.load(this.getData());
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
        if (value) {
            this.setData(value);
        }
    }

    render() {
        return (
            <i-panel id={'pnlViewer'}>
                <i-markdown
                    id={'mdViewer'}
                    width={'100%'} height={'100%'}
                    padding={{ top: '10px', bottom: '10px', left: '10px', right: '10px' }}
                    theme='dark'
                ></i-markdown>
            </i-panel>
        )
    }
}
