declare type Styles = { readonly [key: string]: string };

declare type Mode = "normal" | "module";

declare interface EasyClassNameClass {
  styles: Styles;
  mode: Mode;
}

export { EasyClassNameClass };
