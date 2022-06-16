const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.ts",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: 9000
  },
  mode: "development"
};
