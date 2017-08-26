const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  build: path.join(__dirname, 'build')
};

//import parts of webpack config
const parts = require('./webpack.parts');

const common = merge([
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.dist,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  }
]);

module.exports = function (env) {
  if (env === 'prod') {
    return merge([
      common,
      parts.clean(PATHS.build),
      parts.loadJavaScript(PATHS.app),
      parts.lintJavaScript({paths: PATHS.app}),
      parts.extractCSS(),
    ]);
  }

  return merge([
    common,
    {
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    },
    parts.generateSourceMaps('eval-sourcemaps'),
    // parts.compressImages(PATHS.app),
    parts.devServer({
      host: process.env.host,
      port: process.env.port
    }),
    parts.loadJavaScript(PATHS.app),
    parts.loadCSS(),
    parts.lintJavaScript({
      paths: PATHS.app,
      options: {
        emitWarning: true
      }
    }),
    // parts.lintCSS(PATHS.app)
  ]);
}
