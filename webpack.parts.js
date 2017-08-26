const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path])
    ]
  }
};

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: process.env.host,
      port: process.env.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

exports.lintJavaScript = function({ paths, options}) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options
        }
      ]
    }
  }
};

exports.loadJavaScript = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          include: paths,
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  }
};

exports.loadCSS = function(paths) {
  return {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
          include: paths
        }
      ]
    }
  }
};

exports.extractCSS = function(paths) {
  return {
    plugins: [
      new ExtractTextPlugin({
        filename: 'bundle.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'resolve-url-loader', 'style-loader']
          })
        }
      ]
    }
  }
};

exports.generateSourceMaps = function(type) {
  return {
    devtool: type
  }
};

exports.loadFontAwesome = function(path) {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|svg|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader'
        }
      ]
    }
  }
};
