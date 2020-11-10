const path = require('path');
const htmlpl = require('html-webpack-plugin');
const csspl = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './str/js/index.js',
    },
    output: {
        path: path.join(__dirname, 'gouwu'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
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
    plugins:[
        new htmlpl({
            template:'./str/index.html',
            filename:'./index.html'
        }),
        new csspl({
            filename:'./index.css'
        })
    ],
    devServer:{
        // open: true,
        port:6969,
        host:'localhost',
        hot:true,
    }

}