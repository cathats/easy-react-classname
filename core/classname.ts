import { Styles } from "./type";

export function ecn(name: string, controlClass: Record<string, boolean>, styles?: Styles): string {
  const _classNames = [] as string[];
  name.split(" ").forEach((v) => {
    const _styleName = styles && styles[v] ? styles[v] : v;
    _styleName && _classNames.push(_styleName);
  });
  Object.keys(controlClass).forEach((key) => {
    if (!controlClass[key]) return;
    const _styleName = styles && styles[key] ? styles[key] : key;
    _styleName && _classNames.push(_styleName);
  });
  return _classNames.join(" ");
}
