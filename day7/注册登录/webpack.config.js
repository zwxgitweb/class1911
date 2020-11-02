const path = require('path');
const htmlplugin = require('html-webpack-plugin');
const extractCss = require('extract-text-webpack-plugin');
module.exports = {
    // 指定入口
    entry: './app.js',
    //指定打包出口
    output: {
        path: __dirname + '/dabao',
        filename: 'dabaobao.js'      //打包之后的 文件名可以自定义
    },
    // 模块
    module: {
        // 规则
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                //编译es6 语法
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets:[
                                    {
                                        // 市面上1%的浏览器都可识别的一种语法
                                        browser:[">1%"]
                                    }
                                ]
                            }
                        ]
                    ]
                }
            },
            {
                test:/\.css$/,
                use:extractCss.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:'css-loader',
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new htmlplugin({
            template:'./index.html',
            filename:'demo.html',
        }),
        new extractCss({
            filename:'style.css',
        })
    ]
}