/// <amd-module name="@scom/page-text/global/interface.ts" />
declare module "@scom/page-text/global/interface.ts" {
    export interface IMPSettings {
        left: string | number;
        right: string | number;
        top: string | number;
        bottom: string | number;
    }
    export interface IFontSettings {
        color?: string;
        fontSize?: string;
        textAlign?: string;
        backgroundColor?: string;
        padding?: IMPSettings;
        margin?: IMPSettings;
        width?: string | number;
        maxWidth?: string | number;
        textTransform?: string;
        borderColor?: string;
        borderWidth?: string | number;
        borderHeight?: string | number;
        borderMargin?: IMPSettings;
    }
    export interface IConfig {
        value: string;
    }
}
/// <amd-module name="@scom/page-text/global/index.ts" />
declare module "@scom/page-text/global/index.ts" {
    export * from "@scom/page-text/global/interface.ts";
}
/// <amd-module name="@scom/page-text/model/index.ts" />
declare module "@scom/page-text/model/index.ts" {
    import { IConfig, IFontSettings } from "@scom/page-text/global/index.ts";
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
        private updateTag;
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
    import { IFontSettings } from "@scom/page-text/global/index.ts";
    export const containerStyles: string;
    export const getMarkdownStyles: (config: IFontSettings) => string;
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
