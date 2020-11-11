const path = require('path');
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                loader:'ts-loader',
            },
            
        ]
    },
    plugins:[
        new htmlPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}