

const path = require('path')

// 这个配置文件，起始就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象

module.exports = {
// 在配置文件中，需要手动指定入口 和 出口
// 入口，表示，要使用webpack打包那个文件
    entry: path.join(__dirname,'./src/main.js'),
    output:{
        //输出文件相关的配置
        // 指定 打包好的文件，输出到到哪个目录中去
        path: path.join(__dirname,"./dist"),
        // 这是指定输出的文件的名称
        filename:'bundle.js'
    }
}

//当我们在控制台，直接输入webpack命令的时候webpack做出以下几步
// 1.首先，webpack发现，我们并没有通过命令的形式，给他指定入口和出口
// 2.webpack就会去项目中根目录中，查找叫做‘webpack.config.js’的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行配置文件后，就地得到了
// 配置文件中，导出的配置对象
// 4.当webpack拿到 配置对象后，就拿到了 配置对象中，指定的入口和出口，然后进行打包构建