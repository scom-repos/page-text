import { IConfig, IFontSettings } from "../global/index";

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

  private updateTag(type: 'light' | 'dark', value: any) {
    this._tag[type] = this._tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop)) this._tag[type][prop] = value[prop];
    }
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