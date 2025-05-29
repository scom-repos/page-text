var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/page-text/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/page-text/model/index.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Model = void 0;
    class Model {
        constructor(options) {
            this._data = { value: '' };
            this._tag = {};
            this._options = options;
        }
        get data() {
            return this._data.value;
        }
        set data(value) {
            this._data.value = value ? value.replace('Â©', '©') : '';
            this._options?.onUpdateBlock();
        }
        get tag() {
            return this._tag;
        }
        setData(data) {
            if (data?.value) {
                data.value = data.value.replace('Â©', '©');
            }
            this._data = data;
            this._options?.onUpdateBlock();
        }
        getData() {
            return this._data;
        }
        getTag() {
            return this._tag;
        }
        setTag(value) {
            this._tag = value;
            this._options?.onUpdateTheme();
        }
        getConfigurators() {
            return [
                {
                    name: 'Builder Configurator',
                    target: 'Builders',
                    getActions: () => {
                        return [];
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this),
                },
                {
                    name: 'Emdedder Configurator',
                    target: 'Embedders',
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this),
                },
            ];
        }
    }
    exports.Model = Model;
});
define("@scom/page-text/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customEditorStyle = exports.customListStyles = exports.getMarkdownStyles = exports.containerStyles = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.containerStyles = components_1.Styles.style({
        $nest: {
            'i-panel.container': {
                width: Theme.layout.container.width,
                maxWidth: Theme.layout.container.maxWidth,
                overflow: Theme.layout.container.overflow,
                textAlign: Theme.layout.container.textAlign,
                margin: '0 auto'
            }
        }
    });
    const getMarkdownStyles = (config) => {
        const cssRules = {
            'h1': {},
            'h2': {},
            'h3': {},
            'h4': {},
            'h5': {},
            'h6': {},
            'p': {},
            'a': {
                color: 'unset'
            },
            '.toastui-editor-contents': {},
            'hr': {},
            "ul": {}
        };
        const { font, textAlign, background, padding, margin, width, maxWidth, borderWidth, borderColor, borderHeight, borderMargin } = config;
        if (textAlign) {
            cssRules['.toastui-editor-contents']['textAlign'] = textAlign;
        }
        if (maxWidth) {
            cssRules['.toastui-editor-contents']['maxWidth'] = getValue(maxWidth);
        }
        if (width) {
            cssRules['.toastui-editor-contents']['width'] = getValue(width);
        }
        if (background?.color) {
            cssRules['.toastui-editor-contents']['backgroundColor'] = background.color;
        }
        if (font?.size) {
            setValue(cssRules, 'fontSize', font.size);
        }
        if (font?.color) {
            cssRules['.toastui-editor-contents']['color'] = font?.color;
        }
        if (font?.transform) {
            setValue(cssRules, 'textTransform', font.transform);
        }
        if (padding?.top) {
            cssRules['.toastui-editor-contents']['paddingTop'] = getValue(padding.top);
        }
        if (padding?.bottom) {
            cssRules['.toastui-editor-contents']['paddingBottom'] = getValue(padding.bottom);
        }
        if (padding?.left) {
            cssRules['.toastui-editor-contents']['paddingLeft'] = getValue(padding.left);
        }
        if (padding?.right) {
            cssRules['.toastui-editor-contents']['paddingRight'] = getValue(padding.right);
        }
        if (margin?.top) {
            setValue(cssRules, 'marginTop', margin.top);
        }
        if (margin?.bottom) {
            setValue(cssRules, 'marginBottom', margin.bottom);
        }
        if (margin?.left) {
            setValue(cssRules, 'marginLeft', margin.left);
        }
        if (margin?.right) {
            setValue(cssRules, 'marginRight', margin.right);
        }
        if (borderColor) {
            cssRules['hr']['backgroundColor'] = borderColor;
            cssRules['hr']['borderColor'] = 'transparent';
        }
        if (borderWidth !== undefined) {
            cssRules['hr']['width'] = getValue(borderWidth);
        }
        if (borderHeight !== undefined) {
            cssRules['hr']['height'] = getValue(borderHeight);
        }
        if (borderMargin?.top) {
            cssRules['hr']['marginTop'] = getValue(borderMargin.top);
        }
        if (borderMargin?.bottom) {
            cssRules['hr']['marginBottom'] = getValue(borderMargin.bottom);
        }
        if (borderMargin?.left) {
            cssRules['hr']['marginLeft'] = getValue(borderMargin.left);
        }
        if (borderMargin?.right) {
            cssRules['hr']['marginRight'] = getValue(borderMargin.right);
        }
        const customStyle = components_1.Styles.style({
            $nest: cssRules
        });
        return customStyle;
    };
    exports.getMarkdownStyles = getMarkdownStyles;
    function getValue(value) {
        return typeof value === 'number' ? `${value}px` : value;
    }
    function setValue(cssRules, key, value) {
        value = getValue(value);
        cssRules['h1'][key] = value;
        cssRules['h2'][key] = value;
        cssRules['h3'][key] = value;
        cssRules['h4'][key] = value;
        cssRules['h5'][key] = value;
        cssRules['h6'][key] = value;
        cssRules['p'][key] = value;
        cssRules['ul'][key] = value;
    }
    exports.customListStyles = components_1.Styles.style({
        $nest: {
            'ul': {
                marginTop: "0px"
            }
        }
    });
    exports.customEditorStyle = components_1.Styles.style({
        $nest: {
            '.toastui-editor-contents': {
                cursor: 'text'
            }
        }
    });
});
define("@scom/page-text", ["require", "exports", "@ijstech/components", "@scom/page-text/model/index.ts", "@scom/page-text/index.css.ts"], function (require, exports, components_2, index_1, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    let ScomPageText = class ScomPageText extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
        }
        get data() {
            return this.model.data;
        }
        set data(value) {
            this.model.data = value;
        }
        get viewer() {
            return this.model.tag?.viewer ?? true;
        }
        async setData(data) {
            this.model.setData(data);
        }
        onUpdateBlock() {
            this.mdViewer.load(this.model.data);
        }
        updateMarkdown() {
            const config = this.model.getTag();
            if (this.customStyle) {
                this.mdViewer.classList.remove(this.customStyle);
            }
            if (!config)
                return;
            this.customStyle = (0, index_css_1.getMarkdownStyles)(config);
            this.mdViewer.classList.add(index_css_1.customListStyles, this.customStyle);
        }
        handleDbClick() {
            if (this.viewer)
                return;
            document.addEventListener('click', this.handleClickEvent);
            this.toggleEditor(true);
            this.mdEditor.value = this.model.data;
        }
        toggleEditor(value) {
            this.mdViewer.visible = !value;
            this.mdEditor.visible = value;
            if (value) {
                this.mdEditor.focus();
            }
        }
        getConfigurators() {
            return this.model.getConfigurators();
        }
        createButton(type) {
            const isCancel = type === 'cancel';
            const button = document.createElement('i-button');
            button.icon = new components_2.Icon(undefined, { name: isCancel ? 'times' : 'check', fill: isCancel ? Theme.colors.error.main : Theme.colors.success.main, width: 12, height: 12 }),
                button.boxShadow = 'none';
            button.background = { color: 'transparent' };
            button.padding = { left: "0.5rem", right: "0.5rem", top: "0.5rem", bottom: "0.5rem" };
            button.width = "auto";
            button.height = '100%';
            button.border = { width: 0 };
            button.onClick = (target, event) => {
                event.preventDefault();
                event.stopPropagation();
                this.toggleEditor(false);
                if (!isCancel) {
                    const newVal = this.mdEditor?.getMarkdownValue();
                    this.data = newVal;
                    this._setDesignPropValue('value', newVal);
                    const designer = this.closest('i-scom-designer');
                    if (designer)
                        designer.renderMD();
                }
            };
            return button;
        }
        handleClick(e) {
            if (this.viewer)
                return;
            const target = e.target;
            const currentText = target.closest('i-page-text');
            if (!currentText || !currentText.isEqualNode(this)) {
                const isButton = target.classList.contains('tui-colorpicker-palette-button') ||
                    target.classList.contains('toastui-editor-toolbar-icons');
                if (!isButton) {
                    this.toggleEditor(false);
                    document.removeEventListener('click', this.handleClickEvent);
                }
            }
        }
        async init() {
            super.init();
            this.maxWidth = "100%";
            this.onUpdateBlock = this.onUpdateBlock.bind(this);
            this.updateMarkdown = this.updateMarkdown.bind(this);
            this.handleClickEvent = this.handleClick.bind(this);
            this.model = new index_1.Model({
                onUpdateBlock: this.onUpdateBlock,
                onUpdateTheme: this.updateMarkdown
            });
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
            ];
        }
        onHide() {
            document.removeEventListener('click', this.handleClick.bind(this));
        }
        render() {
            return (this.$render("i-panel", { id: 'pnlViewer', maxWidth: "100%" },
                this.$render("i-markdown", { id: 'mdViewer', width: '100%', height: '100%', onDblClick: this.handleDbClick }),
                this.$render("i-markdown-editor", { id: 'mdEditor', width: '100%', height: "auto", minHeight: 100, hideModeSwitch: true, viewer: false, mode: "wysiwyg", class: index_css_1.customEditorStyle, visible: false })));
        }
    };
    ScomPageText = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-page-text', {
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
    ], ScomPageText);
    exports.default = ScomPageText;
});
