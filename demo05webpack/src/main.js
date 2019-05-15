// 这是main.js是我们项目的js入口文件

// 1.导入Jquery
// import *** from *** 是es6中的导入模块的方式
//es语法高级浏览器解析不了，执行报错

import $ from 'jquery'
// webpack ./src/main.js ./dist/bundle.js
//const $ = require(''jquery)

$(function (){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})