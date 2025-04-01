import { IConfig, IFontSettings } from "../interface";

interface IOptions {
  onUpdateBlock: () => void;
  onUpdateTheme: () => void;
}

export class Model {
  private _data: IConfig = { value: '' };
  private _tag: IFontSettings = {};
  private _options: IOptions;

  constructor(options: IOptions) {
    this._options = options;
  }

  get data() {
    return this._data.value;
  }

  set data(value: string) {
    this._data.value = value ? value.replace('Â©', '©') : '';
    this._options?.onUpdateBlock();
  }

  setData(data: IConfig) {
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

  setTag(value: IFontSettings) {
    this._tag = value;
    this._options?.onUpdateTheme();
  }

  getConfigurators() {
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: () => {
          return []
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