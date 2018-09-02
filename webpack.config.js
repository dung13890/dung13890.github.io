const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./development/js/index.js', './development/scss/main.scss' ],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'js/main.js'
  },
  watch: true,
  devServer: {
    inline: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from:'development/images',
        to:'images'
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
              outputPath: 'css/'
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
