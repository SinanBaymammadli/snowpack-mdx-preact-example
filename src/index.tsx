import { h, render } from "preact";
import "preact/devtools";
import { MDXProvider } from "@mdx-js/preact";
import { App } from "./App.js";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  render(
    <MDXProvider components={{}}>
      <App />
    </MDXProvider>,
    root,
  );
}
