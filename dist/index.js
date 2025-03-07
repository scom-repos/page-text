var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/page-text/global/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/page-text/global/index.ts", ["require", "exports", "@scom/page-text/global/interface.ts"], function (require, exports, interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/page-text/global/index.ts'/> 
    __exportStar(interface_1, exports);
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
            // const newValue = value || {};
            // for (let prop in newValue) {
            //   if (newValue.hasOwnProperty(prop)) {
            //     if (prop === 'light' || prop === 'dark') this.updateTag(prop, newValue[prop]);
            //     else this._tag[prop] = newValue[prop];
            //   }
            // }
            this._tag = value;
            this._options?.onUpdateTheme();
        }
        updateTag(type, value) {
            this._tag[type] = this._tag[type] ?? {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this._tag[type][prop] = value[prop];
            }
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
    exports.getMarkdownStyles = exports.containerStyles = void 0;
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
            'hr': {}
        };
        const { color, fontSize, textAlign, backgroundColor, padding, margin, width, maxWidth, borderColor, borderWidth, textTransform, borderHeight, borderMargin } = config;
        if (textAlign) {
            cssRules['.toastui-editor-contents']['textAlign'] = textAlign;
        }
        if (maxWidth) {
            cssRules['.toastui-editor-contents']['maxWidth'] = getValue(maxWidth);
        }
        if (width) {
            cssRules['.toastui-editor-contents']['width'] = getValue(width);
        }
        if (backgroundColor) {
            cssRules['.toastui-editor-contents']['backgroundColor'] = backgroundColor;
        }
        if (fontSize) {
            setValue(cssRules, 'fontSize', fontSize);
        }
        if (color) {
            cssRules['.toastui-editor-contents']['color'] = color;
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
        if (textTransform) {
            setValue(cssRules, 'textTransform', textTransform);
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
    }
});
define("@scom/page-text", ["require", "exports", "@ijstech/components", "@scom/page-text/model/index.ts", "@scom/page-text/index.css.ts"], function (require, exports, components_2, index_1, index_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let ScomPageText = class ScomPageText extends components_2.Module {
        constructor(parent, options) {
            super(parent, options);
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
            this.mdViewer.classList.add(this.customStyle);
        }
        getConfigurators() {
            return this.model.getConfigurators();
        }
        async init() {
            super.init();
            this.onUpdateBlock = this.onUpdateBlock.bind(this);
            this.updateMarkdown = this.updateMarkdown.bind(this);
            this.model = new index_1.Model({
                onUpdateBlock: this.onUpdateBlock,
                onUpdateTheme: this.updateMarkdown
            });
            const value = this.getAttribute('value', true);
            if (value) {
                this.setData({ value });
            }
        }
        render() {
            return (this.$render("i-panel", { id: 'pnlViewer' },
                this.$render("i-markdown", { id: 'mdViewer', width: '100%', height: '100%', theme: 'dark' })));
        }
    };
    ScomPageText = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-page-text')
    ], ScomPageText);
    exports.default = ScomPageText;
});
