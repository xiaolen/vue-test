const path = require('path')

//启用热更新的第二步
const webpack = require('webpack')

// 导入在内存中生成的html 页面的插件
// 只要是插件，都一定要 放在 plugins 节点中去
// 这个插件的两个作用
// 1.自动在内存中根据指定页面生成一个内存中的页面
// 自动，把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

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
    },
    // 配置插件的节点   
    plugins:[
        //new一个热更新的 模块对象，这是 启用热更新的第三步
            // new webpack.HotModuleReplacementPlugin()
    
            new htmlWebpackPlugin({
                // 创建一个 在内存中 生成 html 页面的插件
                // 指定 模版页面，将来会根据指定的页面路径，生成内存中的页面
                template:path.join(__dirname,'./src/index.html'),
                // 指定生成的内存中页面的名称
                filename: 'index.html'
            })
        ],
        // 这个节点，用于配置所有的第三方模块 加载器
    module:{
        rules:[
            // 所有第三方模块的匹配规则
            // 配置处理 .css 文件的第三方loader模块的 匹配规则
            { test:/\.css$/,use:['style-loader','css-loader'] },
            // 第三方loader 规则
            // 配置处理 .less 文件的第三方 loader 规则
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 第三方loader 规则
            // 配置处理 .scss 文件的第三方 loader 规则
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},

            // 处理图片路径的loader
            // limit 给定的值，是图片的大小，单位是 byte，如果我们引用的图片，大于或等于给定的
            // limit值，则不会被转为base64格式的字符串，如果 图片大小给定的limit 值，则会被转为base64
            // 浏览器展示的图片名称是使用哈希值来区别图片，保证图片不重名
            // [name].[ext] 原名输出
            // [hash:8]指定一个8位的哈希值防止重名
            { test:/\.jpg|png|gif|bmp|jpeg$/,use:'url-loader?limit=295,489&name=[hash:8]-[name].[ext]'},


            { test:/\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},
        ]
    }
}