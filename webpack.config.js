const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let config = {
  entry: { index: path.resolve(__dirname, "src", "index.jsx") },
  output: {
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "static", "index.html"),
    })
  ],
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'eval-cheap-module-source-map';
  }

  return config;
};
