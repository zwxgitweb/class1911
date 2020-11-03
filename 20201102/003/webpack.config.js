
const {resolve} = require('path')

module.exports = {
    // 入口文件 : 
    entry: './src/index.js',
    // 出口文件 ：
    output:{
        filename:'built.js', // 输入的文件名
        path:resolve(__dirname,'build')
    },
    // loader 配置 ： 规则
    module:{
        rules:[
            // css 配置
            {
                test:/\.css$/, // 正则表达式 ： 以.css 为后缀名的匹配
                // use : 使用那些loader 
                // use 数组中 从右向左，从下向上 依次执行
                use:[
                    // 创建style标签，将js中的样式资源，加载到head中
                    'style-loader',
                    // 将css文件变成common.js模块加载到js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    //  pulgin 配置 ：插件
    // pulgins:[],
    // 模式
    mode :'development' // 开发模式  //  production : 线上模式 只有这两种
}