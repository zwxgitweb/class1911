const htmlPlugin = require('html-webpack-plugin')
const extractCss = require('extract-text-webpack-plugin')
const data = require('./src/mock/data.json')
module.exports = {
    mode:'development',
    entry: { app: './src/app.js'},
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

            }
        ]
    },
    plugins: [
        new htmlPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new extractCss({
            filename:"style.css"
        })
    ],
    devServer:{
        port:8080,
        host:'localhost',
        before(app){
            app.get('/list',(req,res)=>{
                res.send(data)
            })
        }
    }
}