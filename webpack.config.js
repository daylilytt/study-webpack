const path = require('path');

module.exports = {
  entry: ['./public/index.js'],
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './build', //设置服务器访问的基本目录
    host: 'localhost',   //服务器的ip地址
    port:'8080',   //端口号
    open: true  //自动打开页面
  }
}