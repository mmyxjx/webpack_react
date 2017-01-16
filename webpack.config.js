var webpack = require('webpack');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
      publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
        {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },

        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },

        {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
      }, {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react']
            }
        }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by xjx')
  ]
}