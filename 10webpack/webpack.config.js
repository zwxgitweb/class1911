const path = require('path');
const htmlPlugin = require("html-webpack-plugin");
const extractCss = require("extract-text-webpack-plugin");
const data = require('./mock/data.json')
module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.js"
    },

    output: {
        path: path.join(__dirname, "bundle"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.join(__dirname, "./mock/mock.js")
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader"
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new htmlPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new extractCss({
            filename: "index.css"
        })
    ],
    devServer: {
        port: 3000,
        host: 'localhost',
        before(app) {
            app.get('/api/list', (req, res) => {
                res.send(data)
            })
        }
    }


}