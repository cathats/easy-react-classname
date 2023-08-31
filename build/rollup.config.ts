import path from "path";
import { dts } from "rollup-plugin-dts";
import rollupTypescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import packageInfo from "../package.json" assert { type: "json" };

const dirName = __dirname.replace("/build", "");
const paths = {
  input: path.join(dirName, "/core/index.ts"),
  output: path.join(dirName, "/lib"),
  inputType: path.join(dirName, "/core"),
};

export default [
  {
    input: paths.input,
    output: [
      { file: path.join(paths.output, "index.esm.js"), format: "es", name: packageInfo.name },
      { file: path.join(paths.output, "index.cjs.js"), format: "cjs", name: packageInfo.name },
    ],
    plugins: [
      commonjs(),
      rollupTypescript(),
      babel({
        runtimeHelpers: true,
        exclude: "node_modules/**",
        extensions: [...DEFAULT_EXTENSIONS, ".ts"],
      }),
    ],
  },
  {
    input: path.join(paths.inputType, "type.d.ts"),
    output: [{ file: path.join(paths.output, "index.d.ts"), format: "es" }],
    plugins: [dts()],
  },
];
