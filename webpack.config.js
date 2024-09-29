// import path from 'path';
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.ts", // Your entry file
  target: "node", // Target Node.js, not a browser
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"], // Resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Compile TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: true, // Minify the output bundle
  },
  mode: "production", // Set the mode to production
};
