const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true
          }
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
