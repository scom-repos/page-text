var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@markdown/main/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_1.Styles.Theme.ThemeVars;
    console.log('Markdown Theme layout', Theme);
    // const containerWidth = Theme.layout?.container?.width || '500px';
    // const containerMaxWidth = Theme.layout?.container?.maxWidth || '500px';
    // const containerOverflow = Theme.layout?.container?.overflow || 'auto';
    // const containerTextAlign = Theme.layout?.container?.textAlign || 'left';
    components_1.Styles.cssRule('#pnlMarkdown', {
        $nest: {
            ".markdown-container.invalid": {
                $nest: {
                    ".markdown-input input": {
                        border: "2px solid #B2554D"
                    }
                }
            },
            "textarea": {
                border: 'none',
                outline: 'none'
            },
            'i-panel.container': {
                width: Theme.layout.container.width,
                maxWidth: Theme.layout.container.maxWidth,
                overflow: Theme.layout.container.overflow,
                textAlign: Theme.layout.container.textAlign,
                margin: '0 auto'
            }
        }
    });
});
define("@markdown/main", ["require", "exports", "@ijstech/components", "@markdown/main/index.css.ts"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MarkdownBlock = void 0;
    const Theme = components_2.Styles.Theme.ThemeVars;
    const configSchema = {
        type: 'object',
        required: [],
        properties: {
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
    let MarkdownBlock = class MarkdownBlock extends components_2.Module {
        constructor() {
            super(...arguments);
            this.defaultEdit = true;
        }
        async init() {
            super.init();
            this.initEventListener();
        }
        initEventListener() {
            this.txtMarkdown.onKeyDown = (control, event) => {
                if (event.ctrlKey && event.keyCode === 13) {
                    this.onConfirm();
                }
            };
        }
        async getConfigSchema() {
            return configSchema;
        }
        async onConfigSave(config) {
            this.tag = config;
            this.updateMarkdown(config);
        }
        updateMarkdown(config) {
            if (!config)
                return;
            const { fontColor, backgroundColor, textAlign } = config;
            if (fontColor)
                this.mdViewer.font = { color: fontColor };
            if (backgroundColor)
                this.pnlContainer.background.color = backgroundColor;
            if (textAlign)
                this.mdViewer.style.textAlign = textAlign;
        }
        handleTxtAreaChanged(control) {
            this.autoResize(control);
            this.mdPreview();
        }
        autoResize(control) {
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
        async setData(value) {
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
        async setTag(value) {
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
        validate() {
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
            return (this.$render("i-panel", { id: 'pnlMarkdown', class: 'markdown-container' },
                this.$render("i-hstack", { width: '100%', height: '100%' },
                    this.$render("i-panel", { id: 'txtMarkdownPnl', width: '50%', height: '100%', border: { right: { color: '#6f56f9', width: '1px', style: 'solid' } } },
                        this.$render("i-input", { id: 'txtMarkdown', class: 'markdown-input', width: '100%', height: '100%', inputType: 'textarea', placeholder: 'Enter here', captionWidth: 0, font: { size: Theme.typography.fontSize }, onChanged: this.handleTxtAreaChanged })),
                    this.$render("i-panel", { class: 'container', id: 'pnlContainer' },
                        this.$render("i-markdown", { id: 'mdViewer', class: 'markdown-viewer', width: 'auto', height: 'auto', padding: { top: '10px', bottom: '10px', left: '10px', right: '10px' }, onDblClick: this.handleMarkdownViewerDblClick })))));
        }
    };
    MarkdownBlock = __decorate([
        components_2.customModule
    ], MarkdownBlock);
    exports.MarkdownBlock = MarkdownBlock;
});
