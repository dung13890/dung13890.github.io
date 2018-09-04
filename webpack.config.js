const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('./package.json');

const nodeModules = 'node_modules/';
const develop = './development/';
const noLoader = 'script-loader!uglify-loader!';

module.exports = {
  mode: 'development', // none/development/production(default)

  entry: {
    stylesheet: develop + 'scss/app.scss',
    app: develop + 'js/app.js',
    blog: develop + 'js/blog.js'
  },

  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].bundle.js',
  },

  watch: true,

  devServer: {
    inline: true
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: develop + 'images',
        to: '../images'
      },
      {
        from: nodeModules + 'flexslider/flexslider.css',
        to: '../fonts/css'
      },
      {
        from: nodeModules + 'flexslider/fonts/',
        to: '../fonts/css/fonts'
      },
      {
        from: nodeModules + 'jquery/dist/jquery.min.js',
        to: 'vendor'
      },
      {
        from: nodeModules + 'popper.js/dist/umd/popper.min.js',
        to: 'vendor'
      },
      {
        from: nodeModules + 'bootstrap/dist/js/bootstrap.min.js',
        to: 'vendor'
      },
      {
        from: nodeModules + 'flexslider/jquery.flexslider-min.js',
        to: 'vendor'
      },
      {
        from: nodeModules + 'jquery-sticky/jquery.sticky.js',
        to: 'vendor'
      },
      {
        from: nodeModules + 'magnific-popup/dist/jquery.magnific-popup.min.js',
        to: 'vendor'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader?name=../images/[name].[ext]"        
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
