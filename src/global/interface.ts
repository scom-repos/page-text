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
  };
}

export interface IConfig {
  value: string;
}