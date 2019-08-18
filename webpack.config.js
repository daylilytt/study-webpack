const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: ["./public/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: "./build", //设置服务器访问的基本目录
    host: "localhost", //服务器的ip地址
    port: "8080", //端口号
    open: true //自动打开页面
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.(png||jpg||gif||jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]", //可以使用path、name、hash、ext等
              publicPath: "http://www.abc.com/img" //配置文件发布后的地址，比如cdn地址
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //不在当前文件夹下查找
        use: "babel-loader"
        // use: {
        //   loader: 'babel-loader',
        //   options:{
        //     presets: ["@babel/preset-env"]
        //   }
        // }
      }
    ]
    // resolve: {  //引入第三方库的方式
    //   alias: {
    //     jQuery: path.resolve(__dirname, 'public/js/jquery.min.js')
    //   }
    // },
    // plugins: [
    //   // new webpack.ProvidePlugin({
    //   //   jQuery: "jQuery"
    //   // }),
    // ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "webpack.html",
      minify: {
        minimize: true,  //是否打包为最小值
        removeAttributeQuotes: true,  //去除引号
        removeComments: true,  //去除注释
        collapseWhitespace: true, //去除空格
        minifyCSS: true, //压缩html内的样式
        minifyJS: true, //压缩html内的js
        removeEmptyElements: true //清楚内容为空的元素
      },
      hash: true //引入产出资源的时候加上哈希，避免缓存
    })
  ]
};
