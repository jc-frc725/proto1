const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    // customizing output filename and directory for loading assets
    assetModuleFilename: 'assets/[name][ext]' // "output in assets dir, with original name and extension"
  },
  plugins: [
    new Dotenv({
      path: '.env'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      // Thanks to Asset Modules, there's no longer a need to use file-loader
      // to emit files/image resources into a designated output directory
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: { // same as assetModuleFilename for output
          filename: 'assets/[name][ext]'
        }
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};