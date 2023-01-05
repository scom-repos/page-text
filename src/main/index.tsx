import {
    Control,
    Module,
    Panel,
    Input,
    Markdown,
    customElements,
    customModule,
    Styles,
    application,
} from '@ijstech/components';
import './index.css';
import { IConfigSchema, IEvent, PageBlock } from '@markdown/global';

const Theme = Styles.Theme.ThemeVars;

// Margin / Padding
export interface IMPSettings {
    left: string;
    right: string;
    top: string;
    bottom: string;
}
export interface IFontSettings {
    color?: string;
    fontSize?: string;
    textAlign?: string;
    backgroundColor?: string;
    padding?: IMPSettings;
    margin?: IMPSettings;
    width?: string;
    maxWidth?: string;
}
export interface IConfigData {
    paragraph: IFontSettings;
    link: IFontSettings;
    heading: {
        h1: IFontSettings;
        h2: IFontSettings;
        h3: IFontSettings;
        h4: IFontSettings;
        h5: IFontSettings;
        h6: IFontSettings;
    }
}

const configSchema: IConfigSchema = {
    type: 'object',
    required: [],
    properties:
        {
            heading: {
                type: 'object',
                required: [],
                properties: {
                    'h1': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                    'h2': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                    'h3': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                    'h4': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                    'h5': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                    'h6': {
                        type: 'object',
                        required: [],
                        properties: {
                            'color': {
                                type: 'string',
                                format: 'color'
                            },
                            'fontSize': {
                                type: 'string'
                            },
                            'backgroundColor': {
                                type: 'string',
                                format: 'color'
                            },
                            'textAlign': {
                                type: 'string',
                                enum: ['left', 'center', 'right']
                            },
                            'padding': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'margin': {
                                type: 'object',
                                required: [],
                                properties: {
                                    'left': {
                                        type: 'string'
                                    },
                                    'right': {
                                        type: 'string'
                                    },
                                    'top': {
                                        type: 'string'
                                    },
                                    'bottom': {
                                        type: 'string'
                                    },
                                }
                            },
                            'width': {
                                type: 'string'
                            },
                            'maxWidth': {
                                type: 'string'
                            }
                        }
                    },
                }
            },
            paragraph: {
                type: 'object',
                required: [],
                properties: {
                    'color': {
                        type: 'string',
                        format: 'color'
                    },
                    'fontSize': {
                        type: 'string'
                    },
                    'backgroundColor': {
                        type: 'string',
                        format: 'color'
                    },
                    'textAlign': {
                        type: 'string',
                        enum: ['left', 'center', 'right']
                    },
                    'padding': {
                        type: 'object',
                        required: [],
                        properties: {
                            'left': {
                                type: 'string'
                            },
                            'right': {
                                type: 'string'
                            },
                            'top': {
                                type: 'string'
                            },
                            'bottom': {
                                type: 'string'
                            },
                        }
                    },
                    'margin': {
                        type: 'object',
                        required: [],
                        properties: {
                            'left': {
                                type: 'string'
                            },
                            'right': {
                                type: 'string'
                            },
                            'top': {
                                type: 'string'
                            },
                            'bottom': {
                                type: 'string'
                            },
                        }
                    },
                    'width': {
                        type: 'string'
                    },
                    'maxWidth': {
                        type: 'string'
                    }
                }
            },
            link: {
                type: 'object',
                required: [],
                properties: {
                    'color': {
                        type: 'string',
                        format: 'color'
                    },
                    'fontSize': {
                        type: 'string'
                    },
                    'backgroundColor': {
                        type: 'string',
                        format: 'color'
                    },
                    'textAlign': {
                        type: 'string',
                        enum: ['left', 'center', 'right']
                    },
                    'padding': {
                        type: 'object',
                        required: [],
                        properties: {
                            'left': {
                                type: 'string'
                            },
                            'right': {
                                type: 'string'
                            },
                            'top': {
                                type: 'string'
                            },
                            'bottom': {
                                type: 'string'
                            },
                        }
                    },
                    'margin': {
                        type: 'object',
                        required: [],
                        properties: {
                            'left': {
                                type: 'string'
                            },
                            'right': {
                                type: 'string'
                            },
                            'top': {
                                type: 'string'
                            },
                            'bottom': {
                                type: 'string'
                            },
                        }
                    },
                    'width': {
                        type: 'string'
                    },
                    'maxWidth': {
                        type: 'string'
                    }
                }
            }
        }

};

@customModule
export class MarkdownBlock extends Module implements PageBlock {
    private data: any;
    private tempData: any;
    private txtMarkdown: Input;
    private mdViewer: Markdown;
    private mdPreview: Markdown;
    private pnlEditor: Panel;
    private pnlViewer: Panel;
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

    getConfigSchema(): IConfigSchema {
        return configSchema;
    }

    async onConfigSave(config: any) {
        this.tag = config;
        this.updateMarkdown(config);
    }

    updateMarkdown(config: IConfigData) {
        if (!config) return;
        const cssRules = {
            "h1": {

            },
            "h2": {

            },
            "h3": {

            },
            "h4": {

            },
            "h5": {

            },
            "h6": {

            },
            "p:not(:has(a))": {

            },
            "p:has(a)": {

            },
            "a": {
                color: "unset"
            }
        };
        if(config.heading) {
            if(config.heading.h1) {
                if (config.heading.h1.fontSize)
                    cssRules["h1"]["fontSize"] = config.heading.h1.fontSize
                if (config.heading.h1.color)
                    cssRules["h1"]["color"] = config.heading.h1.color
                if (config.heading.h1.backgroundColor)
                    cssRules["h1"]["backgroundColor"] = config.heading.h1.backgroundColor
                if (config.heading.h1.textAlign)
                    cssRules["h1"]["textAlign"] = config.heading.h1.textAlign
                if (config.heading.h1.padding) {
                    if (config.heading.h1.padding.left)
                        cssRules["h1"]["paddingLeft"] = config.heading.h1.padding.left;
                    if (config.heading.h1.padding.right)
                        cssRules["h1"]["paddingRight"] = config.heading.h1.padding.right;
                    if (config.heading.h1.padding.top)
                        cssRules["h1"]["paddingTop"] = config.heading.h1.padding.top;
                    if (config.heading.h1.padding.bottom)
                        cssRules["h1"]["paddingBottom"] = config.heading.h1.padding.bottom;
                }
                if (config.heading.h1.margin) {
                    if (config.heading.h1.margin.left)
                        cssRules["h1"]["marginLeft"] = config.heading.h1.margin.left;
                    if (config.heading.h1.margin.right)
                        cssRules["h1"]["marginRight"] = config.heading.h1.margin.right;
                    if (config.heading.h1.margin.top)
                        cssRules["h1"]["marginTop"] = config.heading.h1.margin.top;
                    if (config.heading.h1.margin.bottom)
                        cssRules["h1"]["marginBottom"] = config.heading.h1.margin.bottom;
                }
                if (config.heading.h1.width)
                    cssRules["h1"]["width"] = config.heading.h1.width;
                if (config.heading.h1.maxWidth)
                    cssRules["h1"]["maxWidth"] = config.heading.h1.maxWidth;
            }
            if(config.heading.h2) {
                if(config.heading.h2.fontSize)
                    cssRules["h2"]["fontSize"] = config.heading.h2.fontSize
                if(config.heading.h2.color)
                    cssRules["h2"]["color"] = config.heading.h2.color
                if(config.heading.h2.backgroundColor)
                    cssRules["h2"]["backgroundColor"] = config.heading.h2.backgroundColor
                if(config.heading.h2.textAlign)
                    cssRules["h2"]["textAlign"] = config.heading.h2.textAlign
                if(config.heading.h2.padding) {
                    if(config.heading.h2.padding.left)
                        cssRules["h2"]["paddingLeft"] = config.heading.h2.padding.left;
                    if(config.heading.h2.padding.right)
                        cssRules["h2"]["paddingRight"] = config.heading.h2.padding.right;
                    if(config.heading.h2.padding.top)
                        cssRules["h2"]["paddingTop"] = config.heading.h2.padding.top;
                    if(config.heading.h2.padding.bottom)
                        cssRules["h2"]["paddingBottom"] = config.heading.h2.padding.bottom;
                }
                if(config.heading.h2.margin) {
                    if(config.heading.h2.margin.left)
                        cssRules["h2"]["marginLeft"] = config.heading.h2.margin.left;
                    if(config.heading.h2.margin.right)
                        cssRules["h2"]["marginRight"] = config.heading.h2.margin.right;
                    if(config.heading.h2.margin.top)
                        cssRules["h2"]["marginTop"] = config.heading.h2.margin.top;
                    if(config.heading.h2.margin.bottom)
                        cssRules["h2"]["marginBottom"] = config.heading.h2.margin.bottom;
                }
                if(config.heading.h2.width)
                    cssRules["h2"]["width"] = config.heading.h2.width;
                if(config.heading.h2.maxWidth)
                    cssRules["h2"]["maxWidth"] = config.heading.h2.maxWidth;
            }
            if(config.heading.h3) {
                if(config.heading.h3.fontSize)
                    cssRules["h3"]["fontSize"] = config.heading.h3.fontSize
                if(config.heading.h3.color)
                    cssRules["h3"]["color"] = config.heading.h3.color
                if(config.heading.h3.backgroundColor)
                    cssRules["h3"]["backgroundColor"] = config.heading.h3.backgroundColor
                if(config.heading.h3.textAlign)
                    cssRules["h3"]["textAlign"] = config.heading.h3.textAlign
                if(config.heading.h3.padding) {
                    if(config.heading.h3.padding.left)
                        cssRules["h3"]["paddingLeft"] = config.heading.h3.padding.left;
                    if(config.heading.h3.padding.right)
                        cssRules["h3"]["paddingRight"] = config.heading.h3.padding.right;
                    if(config.heading.h3.padding.top)
                        cssRules["h3"]["paddingTop"] = config.heading.h3.padding.top;
                    if(config.heading.h3.padding.bottom)
                        cssRules["h3"]["paddingBottom"] = config.heading.h3.padding.bottom;
                }
                if(config.heading.h3.margin) {
                    if(config.heading.h3.margin.left)
                        cssRules["h3"]["marginLeft"] = config.heading.h3.margin.left;
                    if(config.heading.h3.margin.right)
                        cssRules["h3"]["marginRight"] = config.heading.h3.margin.right;
                    if(config.heading.h3.margin.top)
                        cssRules["h3"]["marginTop"] = config.heading.h3.margin.top;
                    if(config.heading.h3.margin.bottom)
                        cssRules["h3"]["marginBottom"] = config.heading.h3.margin.bottom;
                }
                if(config.heading.h3.width)
                    cssRules["h3"]["width"] = config.heading.h3.width;
                if(config.heading.h3.maxWidth)
                    cssRules["h3"]["maxWidth"] = config.heading.h3.maxWidth;
            }
            if(config.heading.h4) {
                if(config.heading.h4.fontSize)
                    cssRules["h4"]["fontSize"] = config.heading.h4.fontSize
                if(config.heading.h4.color)
                    cssRules["h4"]["color"] = config.heading.h4.color
                if(config.heading.h4.backgroundColor)
                    cssRules["h4"]["backgroundColor"] = config.heading.h4.backgroundColor
                if(config.heading.h4.textAlign)
                    cssRules["h4"]["textAlign"] = config.heading.h4.textAlign
                if(config.heading.h4.padding) {
                    if(config.heading.h4.padding.left)
                        cssRules["h4"]["paddingLeft"] = config.heading.h4.padding.left;
                    if(config.heading.h4.padding.right)
                        cssRules["h4"]["paddingRight"] = config.heading.h4.padding.right;
                    if(config.heading.h4.padding.top)
                        cssRules["h4"]["paddingTop"] = config.heading.h4.padding.top;
                    if(config.heading.h4.padding.bottom)
                        cssRules["h4"]["paddingBottom"] = config.heading.h4.padding.bottom;
                }
                if(config.heading.h4.margin) {
                    if(config.heading.h4.margin.left)
                        cssRules["h4"]["marginLeft"] = config.heading.h4.margin.left;
                    if(config.heading.h4.margin.right)
                        cssRules["h4"]["marginRight"] = config.heading.h4.margin.right;
                    if(config.heading.h4.margin.top)
                        cssRules["h4"]["marginTop"] = config.heading.h4.margin.top;
                    if(config.heading.h4.margin.bottom)
                        cssRules["h4"]["marginBottom"] = config.heading.h4.margin.bottom;
                }
                if(config.heading.h4.width)
                    cssRules["h4"]["width"] = config.heading.h4.width;
                if(config.heading.h4.maxWidth)
                    cssRules["h4"]["maxWidth"] = config.heading.h4.maxWidth;
            }
            if(config.heading.h5) {
                if(config.heading.h5.fontSize)
                    cssRules["h5"]["fontSize"] = config.heading.h5.fontSize
                if(config.heading.h5.color)
                    cssRules["h5"]["color"] = config.heading.h5.color
                if(config.heading.h5.backgroundColor)
                    cssRules["h5"]["backgroundColor"] = config.heading.h5.backgroundColor
                if(config.heading.h5.textAlign)
                    cssRules["h5"]["textAlign"] = config.heading.h5.textAlign
                if(config.heading.h5.padding) {
                    if(config.heading.h5.padding.left)
                        cssRules["h5"]["paddingLeft"] = config.heading.h5.padding.left;
                    if(config.heading.h5.padding.right)
                        cssRules["h5"]["paddingRight"] = config.heading.h5.padding.right;
                    if(config.heading.h5.padding.top)
                        cssRules["h5"]["paddingTop"] = config.heading.h5.padding.top;
                    if(config.heading.h5.padding.bottom)
                        cssRules["h5"]["paddingBottom"] = config.heading.h5.padding.bottom;
                }
                if(config.heading.h5.margin) {
                    if(config.heading.h5.margin.left)
                        cssRules["h5"]["marginLeft"] = config.heading.h5.margin.left;
                    if(config.heading.h5.margin.right)
                        cssRules["h5"]["marginRight"] = config.heading.h5.margin.right;
                    if(config.heading.h5.margin.top)
                        cssRules["h5"]["marginTop"] = config.heading.h5.margin.top;
                    if(config.heading.h5.margin.bottom)
                        cssRules["h5"]["marginBottom"] = config.heading.h5.margin.bottom;
                }
                if(config.heading.h5.width)
                    cssRules["h5"]["width"] = config.heading.h5.width;
                if(config.heading.h5.maxWidth)
                    cssRules["h5"]["maxWidth"] = config.heading.h5.maxWidth;
            }
            if(config.heading.h6) {
                if(config.heading.h6.fontSize)
                    cssRules["h6"]["fontSize"] = config.heading.h6.fontSize
                if(config.heading.h6.color)
                    cssRules["h6"]["color"] = config.heading.h6.color
                if(config.heading.h6.backgroundColor)
                    cssRules["h6"]["backgroundColor"] = config.heading.h6.backgroundColor
                if(config.heading.h6.textAlign)
                    cssRules["h6"]["textAlign"] = config.heading.h6.textAlign
                if(config.heading.h6.padding) {
                    if(config.heading.h6.padding.left)
                        cssRules["h6"]["paddingLeft"] = config.heading.h6.padding.left;
                    if(config.heading.h6.padding.right)
                        cssRules["h6"]["paddingRight"] = config.heading.h6.padding.right;
                    if(config.heading.h6.padding.top)
                        cssRules["h6"]["paddingTop"] = config.heading.h6.padding.top;
                    if(config.heading.h6.padding.bottom)
                        cssRules["h6"]["paddingBottom"] = config.heading.h6.padding.bottom;
                }
                if(config.heading.h6.margin) {
                    if(config.heading.h6.margin.left)
                        cssRules["h6"]["marginLeft"] = config.heading.h6.margin.left;
                    if(config.heading.h6.margin.right)
                        cssRules["h6"]["marginRight"] = config.heading.h6.margin.right;
                    if(config.heading.h6.margin.top)
                        cssRules["h6"]["marginTop"] = config.heading.h6.margin.top;
                    if(config.heading.h6.margin.bottom)
                        cssRules["h6"]["marginBottom"] = config.heading.h6.margin.bottom;
                }
                if(config.heading.h6.width)
                    cssRules["h6"]["width"] = config.heading.h6.width;
                if(config.heading.h6.maxWidth)
                    cssRules["h6"]["maxWidth"] = config.heading.h6.maxWidth;
            }
        }
        if(config.paragraph) {
            if(config.paragraph.fontSize)
                cssRules["p:not(:has(a))"]["fontSize"] = config.paragraph.fontSize
            if(config.paragraph.color)
                cssRules["p:not(:has(a))"]["color"] = config.paragraph.color
            if(config.paragraph.backgroundColor)
                cssRules["p:not(:has(a))"]["backgroundColor"] = config.paragraph.backgroundColor
            if(config.paragraph.textAlign)
                cssRules["p:not(:has(a))"]["textAlign"] = config.paragraph.textAlign
            if(config.paragraph.padding) {
                if(config.paragraph.padding.left)
                    cssRules["p:not(:has(a))"]["paddingLeft"] = config.paragraph.padding.left;
                if(config.paragraph.padding.right)
                    cssRules["p:not(:has(a))"]["paddingRight"] = config.paragraph.padding.right;
                if(config.paragraph.padding.top)
                    cssRules["p:not(:has(a))"]["paddingTop"] = config.paragraph.padding.top;
                if(config.paragraph.padding.bottom)
                    cssRules["p:not(:has(a))"]["paddingBottom"] = config.paragraph.padding.bottom;
            }
            if(config.paragraph.margin) {
                if(config.paragraph.margin.left)
                    cssRules["p:not(:has(a))"]["marginLeft"] = config.paragraph.margin.left;
                if(config.paragraph.margin.right)
                    cssRules["p:not(:has(a))"]["marginRight"] = config.paragraph.margin.right;
                if(config.paragraph.margin.top)
                    cssRules["p:not(:has(a))"]["marginTop"] = config.paragraph.margin.top;
                if(config.paragraph.margin.bottom)
                    cssRules["p:not(:has(a))"]["marginBottom"] = config.paragraph.margin.bottom;
            }
            if(config.paragraph.width)
                cssRules["p:not(:has(a))"]["width"] = config.paragraph.width
            if(config.paragraph.maxWidth)
                cssRules["p:not(:has(a))"]["maxWidth"] = config.paragraph.maxWidth
        }
        if(config.link) {
            if(config.link.fontSize)
                cssRules["p:has(a)"]["fontSize"] = config.link.fontSize
            if(config.link.color)
                cssRules["p:has(a)"]["color"] = config.link.color
            if(config.link.backgroundColor)
                cssRules["p:has(a)"]["backgroundColor"] = config.link.backgroundColor
            if(config.link.textAlign)
                cssRules["p:has(a)"]["textAlign"] = config.link.textAlign
            if(config.link.padding) {
                if(config.link.padding.left)
                    cssRules["p:has(a)"]["paddingLeft"] = config.link.padding.left;
                if(config.link.padding.right)
                    cssRules["p:has(a)"]["paddingRight"] = config.link.padding.right;
                if(config.link.padding.top)
                    cssRules["p:has(a)"]["paddingTop"] = config.link.padding.top;
                if(config.link.padding.bottom)
                    cssRules["p:has(a)"]["paddingBottom"] = config.link.padding.bottom;
            }
            if(config.link.margin) {
                if(config.link.margin.left)
                    cssRules["p:has(a)"]["marginLeft"] = config.link.margin.left;
                if(config.link.margin.right)
                    cssRules["p:has(a)"]["marginRight"] = config.link.margin.right;
                if(config.link.margin.top)
                    cssRules["p:has(a)"]["marginTop"] = config.link.margin.top;
                if(config.link.margin.bottom)
                    cssRules["p:has(a)"]["marginBottom"] = config.link.margin.bottom;
            }
            if(config.link.width)
                cssRules["p:has(a)"]["width"] = config.link.width
            if(config.link.maxWidth)
                cssRules["p:has(a)"]["maxWidth"] = config.link.maxWidth
        }

        Styles.cssRule(`${this.tagName.toLowerCase()} i-markdown`, {
            $nest: cssRules
        });

    }

    handleTxtAreaChanged(control: any) {
        this.autoResize(control);
        this.mdPreview.load(this.txtMarkdown.value);
    }

    autoResize(control: any) {
        const rows = control.value.split('\n').length;
        const lineHeight = 85.94 / 4;
        const minHeight = 600;
        const calcHeight = rows * lineHeight;
        control.height = calcHeight > minHeight ? calcHeight : minHeight;
    }

    getEvents(): IEvent[] {
        return [{
            name: 'EVENT_ON_CONFIRM',
            description: 'This event fires when the markdown content is confirmed.'
        }]
    }

    getData() {
        return this.data;
    }

    async setData(value: any) {
        this.data = value;
        this.pnlEditor.visible = false;
        this.pnlViewer.visible = true;
        // this.mdViewer.visible = true;
        // this.mdViewer.width = '100%';
        // this.txtMarkdownPnl.width = 0;
        // this.txtMarkdown.visible = false;
        this.mdViewer.load(value);
    }

    getTag() {
        return this.tag;
    }

    async setTag(value: IConfigData) {
        this.tag = value;
        this.updateMarkdown(value);
    }

    async edit() {
        this.pnlEditor.visible = true;
        this.pnlViewer.visible = false;
        // this.mdViewer.width = '50%';
        // this.txtMarkdownPnl.width = '50%';
        this.txtMarkdown.value = this.data;
        // this.txtMarkdown.visible = true;
        // this.mdViewer.visible = true;
        this.autoResize(this.txtMarkdown);
    }

    async confirm() {
        this.setData(this.txtMarkdown.value);
        this.pnlEditor.visible = false;
        this.pnlViewer.visible = true;
        // this.mdViewer.visible = true;
        // this.mdViewer.width = '100%';
        // this.txtMarkdownPnl.width = 0;
        // this.txtMarkdown.visible = false;
        this.tempData = this.data;
        application.EventBus.dispatch('EVENT_ON_CONFIRM', () => {});
        console.log('pageblock-markdown this', this, this.parentNode);
    }

    async discard() {
        if (!this.data) {
            this.txtMarkdown.value = '';
            return;
        }
        this.data = this.tempData;
        this.txtMarkdown.value = this.tempData;
        this.setData(this.tempData);
        this.pnlEditor.visible = false;
        this.pnlViewer.visible = true;
        // this.mdViewer.visible = true;
        // this.mdViewer.width = '100%';
        // this.txtMarkdownPnl.width = 0;
        // this.txtMarkdown.visible = false;
    }

    validate(): boolean {
        const isValid = !!(this.txtMarkdown.value.trim());
        // if (!isValid)
        //     this.pnlMarkdown.classList.add('invalid');
        // else
        //     this.pnlMarkdown.classList.remove('invalid');
        return isValid;
    }

    async handleMarkdownViewerDblClick() {
        await this.onEdit();
    }

    render() {
        return (
            <i-panel>
                <i-panel id={'pnlEditor'} padding={{ top: 30, bottom: 30, left: 50, right: 50 }}>
                    <i-grid-layout templateColumns={['1fr', '1fr']} gap={{ column: 20 }}>
                        <i-panel id={'txtMarkdownPnl'} width={'100%%'} height={'100%'} class={'box'}>
                            <i-panel class={'box-header'}>
                                <i-label caption={'Editor'}></i-label>
                            </i-panel>
                            <i-panel class={'box-content'}>
                                <i-panel class={'form-group'}>
                                    <i-input
                                        id={'txtMarkdown'} class={'form-control'}
                                        width={'100%'} height={'100%'}
                                        inputType={'textarea'} placeholder={'Enter here'} captionWidth={0}
                                        font={{ size: Theme.typography.fontSize }}
                                        onChanged={this.handleTxtAreaChanged}></i-input>
                                </i-panel>
                            </i-panel>
                        </i-panel>
                        <i-panel id={'txtMarkdownPnl'} width={'100%'} height={'100%'} class={'box'}>
                            <i-panel class={'box-header'}>
                                <i-label caption={'Preview'}></i-label>
                            </i-panel>
                            <i-panel class={'box-content'}>
                                <i-panel class={'form-group'}>
                                    <i-markdown
                                        id={'mdPreview'} class={'form-control'}
                                        width={'auto'} height={'auto'}
                                        padding={{ top: '10px', bottom: '10px', left: '10px', right: '10px' }}
                                        onDblClick={this.handleMarkdownViewerDblClick}
                                    ></i-markdown>
                                </i-panel>
                            </i-panel>
                        </i-panel>
                    </i-grid-layout>
                </i-panel>
                <i-panel id={'pnlViewer'}>
                    <i-markdown
                        id={'mdViewer'}
                        width={'100%'} height={'100%'}
                        padding={{ top: '10px', bottom: '10px', left: '10px', right: '10px' }}
                        onDblClick={this.handleMarkdownViewerDblClick}
                    ></i-markdown>
                </i-panel>
            </i-panel>
        );
    }
}
