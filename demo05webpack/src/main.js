// 这是main.js是我们项目的js入口文件

// 1.导入Jquery
// import *** from *** 是es6中的导入模块的方式
//es语法高级浏览器解析不了，执行报错

import $ from 'jquery'
// webpack ./src/main.js ./dist/bundle.js
//const $ = require(''jquery)


import './css/index.css'


// 使用impot语法，导入css样式表
// 注意：webpack，默认只能打包处理 js 类型的文件，无法处理其他的非js类型的文件；
// 如果要处理 非js类型文件，我们需要手动安装一些合适的第三方loader加载器
// 1.如果想要打包处理css文件，需要安装 cnpm i style-loader css-loader -D
// 2.打开webpack.config.js 这个配置文件，在里面新增一个配置节点叫 modele，
// 他是一个对象；在这个module 对象身上，有个rules属性，这个rules属性是个数组中，存放了
// 所有第三方文件的匹配和处理规则；

import './css/index.less'
// npm i less -D
//安装less-loader:npm i less-loader -D

import './css/index.scss'
// npm i node-sass -D
//npm i sass-loader -D

//注意：webpack 处理第三方文件类型的过程
// 1.发现这个 要处理的文件不是js文件，然后就去 配置文件中查找有没有对应的第三方 loader规则
// 2.如果能找到对应的规则，就会调用对应的loader 处理 这种文件类型
// 3.在调用loader的时候，是从后往前调用的
// 4.当最后一个 loader调用完毕，会把处理的结果，直接交给webpack 进行打包合并，最终输出到bundle.js中



$(function (){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

// 在package.json中修改配置  在scripts中引入dev
// Ctrl+c停止服务器
// 使用 webpack-dev-server这个工具，来实现自动打包编译功能
// 1.运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法，和webpack命令的用法，完全一样
// 3.由于，我们是在项目中，本地安装的 webpack-dev-server，所以无法把它当作脚本命令，在powershell 终端中直接运行；
// （只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
// 4.注意：webpack-dev-server这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack npm i webpack -D·~~
// 5.webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的物理磁盘上；而是，
// 直接托管到 电脑内存中，所以，我门在 项目中，根本找不到 这个打包好的bundle.js
// 6.我们可以认为，webpack-dev-server把打包好的文件，以一种粗你的形式，托管在项目
// 的根目录中。虽然我们看不到它，但是，可以认为，和dist src node_modules 平级，有一个看不见的文件叫做bundle.js

// 在package.json中
// --open --port 3000 --contentBase src --hot
// --open 默认修改之后打开浏览器 --port是指定端口号 --contentBase src加载指定的目录  --hot是加载修改的内容到本地(相当于你修改了其中的某个东西,他不会再次生成bundle文件,只是单独修补修改后的内容)