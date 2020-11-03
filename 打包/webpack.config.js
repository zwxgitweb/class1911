 const path = require('path');
 const htmlPlugin = require('html-webpack-plugin');
 const extractCss = require('extract-text-webpack-plugin');

 module.exports = {
     mode: 'development',

     entry: {
         app: './src/app.js'
     },
     output: {
         path: path.join(__dirname, 'bundle'),
         filename: 'app.js'
     },

     module: {
         rules: [{
                 test: /\.js$/,
                 loader: "babel-loader",
                //  exclude: path.join(__dirname, "./mock/mock.js")
             },
             {
                 test: /\.(css|scss|sass)$/,
                 use: extractCss.extract({
                     fallback: 'style-loader',
                     use: [{
                             loader: "css-loader"
                         },
                         {
                             loader: "sass-loader"
                         }
                     ]
                 })
             },
         ]
     },

     plugins: [
         new htmlPlugin({
             template: './src/index.html',
             filename: 'index.html'
         }),
         new extractCss({
             filename: "style.min.css"
         }),
     ]
 }