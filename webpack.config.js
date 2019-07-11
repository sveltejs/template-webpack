const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const envConfig = env => require(`./build-tools/webpack.${env.mode}.js`)(env);

module.exports = env => {
  return webpackMerge(
    {
      mode: env.mode,
      resolve: {
        extensions: [".wasm", ".mjs", ".js", ".svelte", ".json"],
        mainFields: ["svelte", "browser", "module", "main"]
      },
      plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./src/favicon.png" })]
    },
    envConfig(env)
  );
};
