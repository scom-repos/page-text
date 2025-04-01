import { IBorder, IFont, ISpace } from "@ijstech/components";
export interface IFontSettings {
  background?: {color?: string, image?: string};
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