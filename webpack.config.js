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
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)?$/,
            include: path.resolve(__dirname, 'src/'),
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        },
    ]
},
};
