
const {resolve} = require('path');

const extractCss = require('extract-text-webpack-plugin');

const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',

    entry:{
        app:resolve(__dirname,'./src/index.js')
    },

    output:{
        path:resolve(__dirname,'dist'),
        filename:'index1.js'
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.(c|sc|sa)ss$/,
                use:extractCss.extract({
                    fallback:'style-loader',
                    use:[
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins:[
        new extractCss({
            filename:'index.min.css'
        }),

        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
    // ,
    // devServer:{
    //     port:3000,
    //     host:"loaclhost",
    //     open:true,
    //     hot:true,
    //     // before(app){
    //     //     app.get('./',(req,res) => {
    //     //         console.log(res)
    //     //     })
    //     // }
    // }
}