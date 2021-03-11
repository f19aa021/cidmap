const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist', 'js'),
      filename: 'app.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      inline: true,
      open: true,
      openPage: '',
      contentBase: path.join(__dirname, "dist"),
      watchContentBase: true,
      port: 8080
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: ['@babel/plugin-syntax-jsx']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  };
