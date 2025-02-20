const path = require("path");
const PeerDepsExternalsPlugin = require("peer-deps-externals-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.ts"
  },
  plugins: [new PeerDepsExternalsPlugin()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "Web3Modal",
    umdNamedDefine: true,
    globalObject: "this"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 65535,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
