import type { EasyClassNameClass, Styles, Mode } from "./type.d";

export default class EasyClassName implements EasyClassNameClass {
  styles: Styles;
  mode: Mode;

  constructor(styles: Styles, mode: EasyClassNameClass["mode"] = "normal") {
    this.styles = styles;
    this.mode = mode;
  }

  create(name: string, controlClass: Record<string, boolean> = {}): any {
    const _classNames = [] as string[];
    name.split(" ").forEach((v) => {
      const _styleName = this.mode === "module" && this.styles[v] ? this.styles[v] : v;
      _classNames.push(_styleName);
    });
    Object.keys(controlClass).forEach((key) => {
      if (!controlClass[key]) return;
      const _styleName = this.mode === "module" && this.styles[key] ? this.styles[key] : key;
      _classNames.push(_styleName);
    });
    return _classNames.join(" ");
  }

  createClassName = (name: string, controlClass: Record<string, boolean> = {}) => {
    return { className: this.create(name, controlClass) };
  };
}
