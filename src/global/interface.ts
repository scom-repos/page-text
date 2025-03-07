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