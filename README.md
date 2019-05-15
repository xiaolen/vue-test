# vue-test
vue的一些简单的操作


## `nrm`的安装使用
提供一些常用的npm包镜像地址，能够让我们快速的切换安装包时候的服务器

1. 运行 `npm i nrm -g`全局安装 `nrm`包
2. 使用 `nrm ls` 查看当前所有可能的镜像源地址以及当前所使用的镜像源地址
3. 使用 `nrm use npm` 或 `nrm use taobao`切换不同的镜像源地址;

> 注意：nrm 只是单纯的提供了几个常用的 下载包的url地址， 并能够让我们在这几个地址之间
> 很方便的进行切换 但是，我们每次装包的时候，使用的装包工具都是 npm
## 网页中常用的静态资源
+ js
    - .js.jsxcoffee.ts(TypeScript 类 c#语言)
+ css
    - .css .less .sass .scss
+ images
    - .jpg .png .gif .bmp .svg
+ 字体文件(Fonts)
    - .svg .ttf .eot .woff .woff2
+ 模版文件
    - .ejs .jade .vue[这是在webpake中定义组件的方式，推荐这么使用]

## 网页中引入的静态资源多了以后问题
1. 网页加载速度慢，因为 我们要发起很多二次请求！
2. 要处理错中复杂的依赖关系

## 解决上述问题
1. 合并、压缩、精灵图、图片的base64编码
2. 可以使用之前学过的requireJs、也可以使用webpack可以解决各个包之间的复杂依赖关系
3. 使用Gulp 是基于task任务的
4. 使用webpack 是基于整个项目进行构建的



## 什么是webpack？
webpack是前端的一个项目构建工具，他是基于Node.js开发出来的一个前端工具

## webpack安装的两种方式
1. 运行`npm i webpack -g` 全局安装webpack，这样做就能在全局使用webpack的命令
2. 在项目根目录中运行`npm i webpack --save-dev` 安装到项目依赖中

