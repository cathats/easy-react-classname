import { EasyClassNameClass } from "./type";

export default class EasyClassName implements EasyClassNameClass {
  styles: EasyClassNameClass["styles"];
  mode: EasyClassNameClass["mode"];

  constructor(styles: EasyClassNameClass["styles"], mode: EasyClassNameClass["mode"] = "normal") {
    this.styles = styles;
    this.mode = mode;
  }

  create(name: string, controlClass: Record<string, boolean> = {}): any {
    const _classNames = [] as string[];
    name.split(" ").forEach((v) => {
      const _styleName = this.mode === "module" && this.styles[v] ? this.styles[v] : v;
      _styleName && _classNames.push(_styleName);
    });
    Object.keys(controlClass).forEach((key) => {
      if (!controlClass[key]) return;
      const _styleName = this.mode === "module" && this.styles[key] ? this.styles[key] : key;
      _styleName && _classNames.push(_styleName);
    });
    return _classNames.join(" ");
  }

  createClassName = (name: string, controlClass: Record<string, boolean> = {}) => {
    return { className: this.create(name, controlClass) };
  };

  static createClassName = (name: string, controlClass: Record<string, boolean> = {}) => {
    const _classNames = [] as string[];
  }
}
