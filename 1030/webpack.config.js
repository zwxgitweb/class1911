const htmlPlugin = require('html-webpack-plugin')
const extractCss = require('extract-text-webpack-plugin')
module.exports = {
    entry: './app.js',
    // entry:['./app.js','./app2.js'],
    // entry: { app: './app.js'},
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
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

            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new extractCss({
            filename:"style.css"
        })
    ]
}