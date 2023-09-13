import { Styles } from "./type";

export function ecn(name: string | string[], controlClass: Record<string, boolean> = {}, styles?: Styles): string {
  const _classNames = [] as string[];
  const resolveName = (v: string) => {
    v.split(" ").forEach((v) => {
      const _styleName = styles && styles[v] ? styles[v] : v;
      _styleName && _classNames.push(_styleName);
    });
  };

  if (Array.isArray(name)) {
    name.forEach((v) => {
      resolveName(v);
    });
  } else {
    resolveName(name);
  }

  Object.keys(controlClass).forEach((key) => {
    if (!controlClass[key]) return;
    const _styleName = styles && styles[key] ? styles[key] : key;
    _styleName && _classNames.push(_styleName);
  });
  return _classNames.join(" ");
}
