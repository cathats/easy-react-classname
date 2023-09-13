declare type Styles = { readonly [key: string]: string };

declare type Mode = "normal" | "module";

declare interface EasyClassNameClass {
  styles: Styles;
  mode: Mode;
}

declare class EasyClassName implements EasyClassNameClass {
    styles: EasyClassNameClass["styles"];
    mode: EasyClassNameClass["mode"];
    constructor(styles: EasyClassNameClass["styles"], mode?: EasyClassNameClass["mode"]);
    create(name: string, controlClass?: Record<string, boolean>): any;
    createClassName: (name: string, controlClass?: Record<string, boolean>) => {
        className: any;
    };
    static createClassName: (name: string, controlClass?: Record<string, boolean>) => void;
}

type EcnType = (name: string | Array<string | undefined>, controlClass?: Record<string, boolean>, styles?: Styles) => string;
declare const ecn: EcnType;

export { EasyClassName, ecn };
