# easy-react-classname
easy-react-classname 用于在 React 中便捷、直观地导入 CSS 类名，并允许通过开关的方式切换类名



## 安装

```bash
pnpm i -S easy-react-classname
```



## 使用

>   要使用 EasyReactClassName 必须创建实例

```tsx
import { EasyClassName } form "easy-react-classname"
const ECN = new EasyClassName(styles, [mode])
```

Mode 有两种模式：

1.   **normal**：导入普通的样式文件，如下

     ```tsx
     import { EasyClassName } form "easy-react-classname"
     import styles from "style.scss" // or style.css style.less
     
     const ECN = new EasyClassName(styles) // 默认为 normal
     ```

2.   **module**：导入样式模块，如下

     ```tsx
     import { EasyClassName } form "easy-react-classname"
     import styles from "style.module.scss" // or style.module.css style.module.less
     
     const ECN = new EasyClassName(styles, "module")
     ```

如只需使用 `createClassName`，在实例化 EasyClassName 的时候可以直接解构。

```tsx
import { EasyClassName } form "easy-react-classname"
import styles from "style.module.scss" // or style.module.css style.module.less

const { createClassName } = new EasyClassName(styles, "module")
```



## 可用方法

### create 创建 classname 字符串

`create` 方法接收两个参数：

1.   第一个参数为 classname 字符串，和正常写法一样，空格隔开，如 `"content content--focus"`
2.   第二个参数为可控 classname，接收对象，通过布尔值控制是否添加到 className，如 `{test1: false, test2: true}` 中，`test2` 是可以被添加的

```tsx
import { EasyClassName } form "easy-react-classname"
import styles from "style.module.scss" // or style.module.css style.module.less

const ECN = new EasyClassName(styles, "module")

// ReactNode
<div className={ECN.create("content test1", {test: false, "content--focus": true})} > /* codes */ </div>
```

### createClassName 创建 props 对象

`createClassName` 用于创建 props 对象，包含 `className`。

```tsx
import { EasyClassName } form "easy-react-classname"
import styles from "style.module.scss" // or style.module.css style.module.less

const ECN = new EasyClassName(styles, "module")

// ReactNode
<div {...ECN.createClassName("content test1", {test: false, "content--focus": true})}> /* codes */ </div>
```

注：`createClassName` 可以结构出来使用

```tsx
// ...
const { createClassName } = new EasyClassName(styles, "module")

// ReactNode
<div {...createClassName("content test1", {test: false, "content--focus": true})}> /* codes */ </div>
```

