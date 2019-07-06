// 项目的入口文件
console.log('ok')

import './css/index.css'

import './css/index.scss'

// 注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略
// 路径的node_modules这一层目录，直接写 包名称，然后后面跟上具体的文件路径
// 不写node_modules这一层目录默认直接去node_modules目录下找
import 'bootstrap/dist/css/bootstrap.css'


//class 关键字，是es6中提供的新语法，是用来实现es6中面向对象编程的方式
// class Person{
    //使用 static 关键字，可以直接定义静态属性
    // 所谓的静态属性，就是 可以直接通过 类名，直接访问的属性
    // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
//     static info = { name: 'zs',age: 20}
// }

// 访问person类身上 info 静态属性
// console.log(Person.info)
// 在webpack中 默认只能处理一部分 es6 的新语法，一些更高级的es6羽凡或者es7语法
// webpack 是处理不了的：这时候 就需要借助雨第三方的 loader， 来帮助webpack 处理这些高级的语法
// 当第三方 loader 把 高级语法转为低级语法之后，回吧结果交给webpack去打包 到bundle.js中

// 通过 babel 可以帮助我们将 高级的语法转换成低级语法
// 1.在webpacak中可以运行如下两套 命令，安装两套，去安装Babel 相关的loader功能
// 1.1 第一套包：npm i babel-core babek-loader babel-plugin-transform-runtime -D
// 1.2 第二套包：npm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开 webpack 的配置文件，在module 节点下的 rules 数组中，添加一个 新的 匹配规则：
// 2.1 { test:/\.js$/, user: 'babel-loader', exclude:/node_modules/ }
// 2.2 注意：在配置babel 的 loader规则的时候，必须 把 node_modules 目录，通过exclude选项排除掉：原因有俩
// 2.2.1 如果 不排除 node_modules, 则Babel 会把 node_modules 中所有的 第三方 js 文件，
// 都打包编译，这样，会非常消耗CPU 同时，打包速度非常慢；
// 2.2.2 哪怕，最终 Babel 吧 所有node_modules 中的JS转换完毕了，但是，项目也无法正常运行
// 3. 在项目的根目录中创建一个叫做 .babelrc 的babel 配置文件，这个配置文件，属于JSON格式，所以，在写 .babelrc 配置的时候
// 必须符合JSON语法规范：不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下的配置: 可以把presets 翻译成语法
                // {
                //     "presets": ["env", "stage-0"],
                //     "plugins": ["transform-runtime"]
                // }







//java c# 实现面向对象的方式完全一样 class是从后端语言中借鉴过来的
// 来实现面向对象
// var p1 = new Person()

// function Animal(name){

//     this.name = name
// }

// Animal.info = 123

// var a1 = new Animal('小花')

// // 这是静态属性
// console.log(Animal.info)

// console.log(a1.name)

// var al = new Animal('xh')