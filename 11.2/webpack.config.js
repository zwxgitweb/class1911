const path = require('path');
const htmlpl = require('html-webpack-plugin');
const csspl = require('extract-text-webpack-plugin');
const data = require('./sctipt/mock/data.json');

module.exports = {
    mode: 'development',
    entry: {
        app: './sctipt/js/index.js',
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
                exclude:path.join(__dirname,'./mock/mock.js')
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
            template: './sctipt/index.html',
            filename: './web_ys.html',
        }),
        new csspl({
            filename: './web_ys.css'
        })
    ],
    devServer: {
        port: 8888,
        host: 'localhost',
        hot: true,
        before(app) {
            app.get('/api/list',(a,b)=>{
                b.send(data)
            })
        }
    }

}