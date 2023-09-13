import { Styles } from "./type";

type EcnType = (name: string | Array<string | undefined>, controlClass?: Record<string, boolean>, styles?: Styles) => string;
export const ecn: EcnType = (name, controlClass = {}, styles = {}) => {
  const _classNames = [] as string[];
  const resolveName = (v: string | undefined) => {
    if (!v || typeof v !== "string") return;
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
};
