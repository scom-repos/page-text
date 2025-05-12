/// <amd-module name="@scom/page-text/interface.ts" />
declare module "@scom/page-text/interface.ts" {
    import { IFont, ISpace } from "@ijstech/components";
    export interface IFontSettings {
        background?: {
            color?: string;
            image?: string;
        };
        font?: IFont;
        textAlign?: string;
        padding?: ISpace;
        margin?: ISpace;
        width?: string | number;
        maxWidth?: string | number;
        borderWidth?: string | number;
        borderColor?: string;
        borderHeight?: string | number;
        borderMargin?: ISpace;
    }
    export interface IConfig {
        value?: string;
    }
}
/// <amd-module name="@scom/page-text/model/index.ts" />
declare module "@scom/page-text/model/index.ts" {
    import { IConfig, IFontSettings } from "@scom/page-text/interface.ts";
    interface IOptions {
        onUpdateBlock: () => void;
        onUpdateTheme: () => void;
    }
    export class Model {
        private _data;
        private _tag;
        private _options;
        constructor(options: IOptions);
        get data(): string;
        set data(value: string);
        setData(data: IConfig): void;
        getData(): IConfig;
        getTag(): IFontSettings;
        setTag(value: IFontSettings): void;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        } | {
            name: string;
            target: string;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            getActions?: undefined;
        })[];
    }
}
/// <amd-module name="@scom/page-text/index.css.ts" />
declare module "@scom/page-text/index.css.ts" {
    import { IFontSettings } from "@scom/page-text/interface.ts";
    export const containerStyles: string;
    export const getMarkdownStyles: (config: IFontSettings) => string;
    export const customListStyles: string;
}
/// <amd-module name="@scom/page-text" />
declare module "@scom/page-text" {
    import { Module, ControlElement, Container } from '@ijstech/components';
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-page-text']: ScomPageTextElement;
            }
        }
    }
    interface ScomPageTextElement extends ControlElement {
        value?: string;
    }
    export default class ScomPageText extends Module {
        private mdViewer;
        private model;
        private customStyle;
        constructor(parent: Container, options: any);
        get data(): string;
        set data(value: string);
        private setData;
        private onUpdateBlock;
        private updateMarkdown;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => any[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        } | {
            name: string;
            target: string;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            getActions?: undefined;
        })[];
        init(): Promise<void>;
        render(): any;
    }
}
