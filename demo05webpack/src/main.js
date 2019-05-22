// 这是main.js是我们项目的js入口文件

// 1.导入Jquery
// import *** from *** 是es6中的导入模块的方式
//es语法高级浏览器解析不了，执行报错

import $ from 'jquery'
// webpack ./src/main.js ./dist/bundle.js
//const $ = require(''jquery)


$(function (){
    $('li:odd').css('backgroundColor','red')
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
// 4.注意：webpack-dev-server这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack npm i webpack -D
// 5.webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的物理磁盘上；而是，
// 直接托管到 电脑内存中，所以，我门在 项目中，根本找不到 这个打包好的bundle.js
// 6.我们可以认为，webpack-dev-server把打包好的文件，以一种粗你的形式，托管在项目
// 的根目录中。虽然我们看不到它，但是，可以认为，和dist src node_modules 平级，有一个看不见的文件叫做bundle.js

// 在package.json中
// --open --port 3000 --contentBase src --hot
// --open --port是指定端口号 --contentBase src加载指定的目录  --hot是加载修改的内容到本地(相当于你修改了其中的某个东西,他不会再次生成bundle文件,只是单独修补修改后的内容)