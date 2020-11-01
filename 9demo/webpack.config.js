const htmlPlugin = require('html-webpack-plugin')
const exactCss = require('extract-text-webpack-plugin')

module.exports = {
    // entry:'./app.js',打包一个
    // entry:['./app.js','./app2.js']多个打包在一个
    entry: {
        app: './app.js',
        app2: './app2.js'
    },//打包生成各自文件
    // 指定打包文件
    output: {
        path: __dirname + '/bundle',
        filename: '[name].js'
    },
    // 模块
    module: {
        // 规则
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                // options: {
                //     presets: [
                //         [
                //             "@babel/preset-env",
                //             {
                //                 targets: [{
                //                     browser: [">1%"]
                //                 }]
                //             }
                //         ]
                //     ]
                // }
            },
            {
                test: /\.css$/,
                // loader:"css-loader"
                use:exactCss.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader"
                            }
                        ]
                        // use: "css-loader",
                    })

            }
        ]
    },

    plugins: [
        new htmlPlugin({
            template: "./index.html",
            filename: "demo.html"
        }),
        new exactCss({
			filename: "style.css"
		})
    ]

}