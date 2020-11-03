const path = require('path');
const Htmlplugin = require('html-webpack-plugin');
const Extract = require('extract-text-webpack-plugin')

module.exports = {
    // mode: "development",
    //指定入口文件  stying || object || array
    entry: {
        app: './app.js', //key值是打包完成之后的文件名
    },
    //指定打包出口文件  objcet
    output: {
        // webpack 如何输出结果的相关选项
        path: path.join(__dirname, '/dist'), //必须是绝对路径  string
        filename: '[name].js', // 入口分块的文件名模板（出口分块） 打包好文件的文件名  [name] 占位符 变量
    },
    //模块配置
    module: {
        rules: [ // 模块规则 (配置 loader、解析器等选项)
            {
                test: /\.js$/, // 匹配文件的后缀 使用正则表达式
                loader: 'babel-loader', // 上下文解析
                options: {  // es6语法转化es5
                    presets: [
                        [
                            '@babel/preset-env', // 需下载模块
                            {
                                targets: [{
                                    browser: ['>1%'], // 相对浏览器解析
                                }]
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/, // 匹配文件的后缀 使用正则表达式
                use: Extract.extract({   //提取css写入html
                    fallback: 'style-loader',
                    use: 'css-loader', // 解析css
                }),
            }
        ]
    },

    //插件设置 
    plugins: [
        // html
        new Htmlplugin({
            template: './index.html',
            filename: 'home.html',
        }),
        //css
        new Extract('style.css'),
    ]

}