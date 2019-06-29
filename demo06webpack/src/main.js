// 项目的入口文件
console.log('ok')

import './css/index.css'

import './css/index.scss'

// 注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略
// 路径的node_modules这一层目录，直接写 包名称，然后后面跟上具体的文件路径
// 不写node_modules这一层目录默认直接去node_modules目录下找
import 'bootstrap/dist/css/bootstrap.css'