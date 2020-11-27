/*
 * @Date: 2020-11-26 10:37:15
 * @information: webpack配置文件
 */
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
    publicPath: '/dist/',
    library: 'Build',
    // 导出方式：umd 将 library 能够在所有的模块定义下都可运行的方式（并且导出的完全不是模块）。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
    // 插件用umd，但项目中不需用
    // 可选项：var，this，commonjs，commonjs2，amd，umd，umd2，assign，window，global，jsonp
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },




}

