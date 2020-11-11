const path = require('path');
const htmlpl = require('html-webpack-plugin');
const csspl = require('extract-text-webpack-plugin');
console.log(csspl) 

module.exports = {
    mode: 'development',                       
    entry: {
        app: './str/js/str.js',                           
    },
    output: {
        path: path.join(__dirname, 'web_ys'),
        filename: 'web_ys.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: csspl.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new htmlpl({
            template: './str/str.html',
            filename: './index.html',
        }),
        new csspl({
            filename: './web_ys.css'
        })
    ],

}