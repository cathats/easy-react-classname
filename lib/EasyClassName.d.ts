import { EasyClassNameClass } from "./type";
export default class EasyClassName implements EasyClassNameClass {
    styles: EasyClassNameClass["styles"];
    mode: EasyClassNameClass["mode"];
    constructor(styles: EasyClassNameClass["styles"], mode?: EasyClassNameClass["mode"]);
    create(name: string, controlClass?: Record<string, boolean>): any;
    createClassName: (name: string, controlClass?: Record<string, boolean>) => {
        className: any;
    };
}
//# sourceMappingURL=EasyClassName.d.ts.map