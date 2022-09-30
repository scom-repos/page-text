(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/markdown.tsx
  var import_components2 = __toModule(__require("@ijstech/components"));

  // src/markdown.css.ts
  var import_components = __toModule(__require("@ijstech/components"));
  var Theme = import_components.Styles.Theme.ThemeVars;
  import_components.Styles.cssRule("i-section-markdown", {
    $nest: {
      ".markdown-container.invalid": {
        $nest: {
          ".markdown-input input": {
            border: "2px solid #B2554D"
          }
        }
      }
    }
  });

  // src/markdown.tsx
  var MarkdownBlock = class extends import_components2.Module {
    constructor() {
      super(...arguments);
      this.defaultEdit = true;
    }
    async init() {
      super.init();
      this.initEventListener();
    }
    initEventListener() {
      this.txtMarkdown.onKeyDown = (control, event) => {
        if (event.ctrlKey && event.keyCode === 13) {
          this.onConfirm();
        }
      };
    }
    autoResize(control) {
      const rows = control.value.split("\n").length;
      const lineHeight = 85.94 / 4;
      const minHeight = 85.94;
      const calcHeight = rows * lineHeight;
      control.height = calcHeight > minHeight ? calcHeight : minHeight;
    }
    getData() {
      return this.data;
    }
    async setData(value) {
      this.data = value;
      this.mdViewer.load(value);
      this.mdViewer.visible = true;
      this.txtMarkdown.visible = false;
    }
    getTag() {
      return this.tag;
    }
    async setTag(value) {
      this.tag = value;
    }
    async edit() {
      this.txtMarkdown.value = this.data;
      this.txtMarkdown.visible = true;
      this.mdViewer.visible = false;
      this.autoResize(this.txtMarkdown);
    }
    async confirm() {
      console.log("md confirm");
      this.setData(this.txtMarkdown.value);
      this.mdViewer.visible = true;
      this.txtMarkdown.visible = false;
    }
    async discard() {
      if (!this.data) {
        this.txtMarkdown.value = "";
        return;
      }
      this.mdViewer.visible = true;
      this.txtMarkdown.visible = false;
    }
    validate() {
      const isValid = !!this.txtMarkdown.value.trim();
      if (!isValid)
        this.pnlMarkdown.classList.add("invalid");
      else
        this.pnlMarkdown.classList.remove("invalid");
      return isValid;
    }
    async handleMarkdownViewerDblClick() {
      await this.onEdit();
    }
    render() {
      return /* @__PURE__ */ this.$render("i-panel", {
        id: "pnlMarkdown",
        class: "markdown-container"
      }, /* @__PURE__ */ this.$render("i-input", {
        id: "txtMarkdown",
        width: "100%",
        height: "auto",
        inputType: "textarea",
        class: "markdown-input",
        onChanged: this.autoResize,
        placeholder: "Share your mind"
      }), /* @__PURE__ */ this.$render("i-markdown", {
        id: "mdViewer",
        class: "markdown-viewer hidden",
        onDblClick: this.handleMarkdownViewerDblClick
      }));
    }
  };
  MarkdownBlock = __decorateClass([
    import_components2.customModule,
    (0, import_components2.customElements)("i-section-markdown")
  ], MarkdownBlock);
})();
