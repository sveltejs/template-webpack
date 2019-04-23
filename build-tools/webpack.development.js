module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            hotReload: true
          }
        }
      }
    ]
  }
});
