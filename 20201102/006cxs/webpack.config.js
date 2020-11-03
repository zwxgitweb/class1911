const path = require('path');

const HWPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HWPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'

}