var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  devtool: "source-map",

  output: {
    publicPath: "/dist/",
  },

  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: ["ejs-loader"],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
                minimize: true,
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      hash: true,
      template: "./src/ejs/index.ejs",
      filename: "index.ejs",
      minify: {
        html5: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: false,
        removeAttributeQuotes: true,
        removeComments: true, // false for Vue SSR to find app placeholder
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributese: true,
        useShortDoctype: true,
      },
    }),
    new ExtractTextPlugin({
      filename: "main_style.css",
    }),
  ],
};
