const htmlPlugin = require('html-webpack-plugin')
const extractCss = require('extract-text-webpack-plugin')
const data = require('./src/mock/data.json')
module.exports = {
    mode: 'development',
    entry: { app: './src/app.js' },
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use:
                    extractCss.extract({
                        fallback: "style-loader",
                        use: [
                            {
                                loader: "css-loader"
                            }
                        ]
                    })

            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpg|png|webp)$/,
                loader: "file-loader"

            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new extractCss({
            filename: "style.css"
        })
    ],
    devServer: {
        port: 8080,
        host: 'localhost',
    },
    resolve: {
        extensions: [".js", ".json", ".css"],
        alias:{
            "@src": "/src"
        }
    }

}