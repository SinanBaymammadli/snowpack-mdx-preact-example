/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@prefresh/snowpack",
    [
      "snowpack-plugin-mdx",
      {
        renderer: `import { h } from "preact";
                   import { mdx } from "@mdx-js/preact"`,
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
