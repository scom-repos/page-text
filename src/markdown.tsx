import {
    Control,
    Module,
    Panel,
    Input,
    Markdown,
    customElements,
    customModule
} from '@ijstech/components';
import './markdown.css';
import {PageBlock} from "../../pageBlock.interface";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['i-section-markdown']: MarkdownBlock;
        }
    }
}

@customModule
@customElements('i-section-markdown')
export class MarkdownBlock extends Module implements PageBlock {
    private data: any;
    private txtMarkdown: Input;
    private mdViewer: Markdown;
    private pnlMarkdown: Panel;
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
            if(event.ctrlKey && event.keyCode === 13) {
                this.onConfirm();
            }
        }
    }

    autoResize(control: any) {
        const rows = control.value.split('\n').length;
        const lineHeight = 85.94 / 4;
        const minHeight = 85.94;
        const calcHeight = rows * lineHeight;
        control.height = calcHeight > minHeight ? calcHeight : minHeight
    }

    getData() {
        return this.data;
    }

    async setData(value: any) {
        this.data = value;
        this.mdViewer.load(value);
        this.mdViewer.visible = true;
        this.txtMarkdown.visible = false;
    }

    getTag() {
        return this.tag;
    }

    async setTag(value: any) {
        this.tag = value;
    }

    async edit() {
        this.txtMarkdown.value = this.data;
        this.txtMarkdown.visible = true;
        this.mdViewer.visible = false;
        this.autoResize(this.txtMarkdown);
    }

    async confirm() {
        console.log('md confirm');
        this.setData(this.txtMarkdown.value);
        this.mdViewer.visible = true;
        this.txtMarkdown.visible = false;
    }

    async discard() {
        if (!this.data) {
            this.txtMarkdown.value = '';
            return;
        }
        this.mdViewer.visible = true;
        this.txtMarkdown.visible = false;
    }

    validate(): boolean {
        const isValid = !!(this.txtMarkdown.value.trim());
        if(!isValid)
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
            <i-panel id={"pnlMarkdown"} class={"markdown-container"}>
                <i-input id={"txtMarkdown"} width={'100%'} height={'auto'} inputType={'textarea'}
                         class={"markdown-input"} onChanged={this.autoResize}
                         placeholder={"Share your mind"}></i-input>
                <i-markdown id={"mdViewer"} class={'markdown-viewer hidden'} onDblClick={this.handleMarkdownViewerDblClick}></i-markdown>
            </i-panel>
        );
    }
}
