const {
    resolve
} = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        },
        {
            test:/\.(png|jpg|gif|jpeg)$/,
            loader:'url-loader',
            options:{
                limit: 8 * 1204
            }
        },{
            test:/\.html$/,
            loader:'html-loader' //处理文件img图片
        }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}