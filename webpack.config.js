var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: './entry.js',
  output: {
    path: './web',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: '/jquery\/src\/selector.js$/', loader: 'amd-define-factory-patcher-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: "jquery",
      $:      "jquery",
      jquery: "jquery"
    })
  ]
};
