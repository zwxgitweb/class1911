
const path = require('path')
const htmlPlugin = require('html-webpack-plugin');
const extractCss = require('extract-text-webpack-plugin');

// const server = require('webpack-dev-server');
module.exports = {
    mode: 'development',
    entry:'./src/index.js'
    ,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'dou.js',
    },
    module:{
        rules:[
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader',
            //     exclude:/node_modules/
            // }
            // , 
            {
                test:/\.html$/,
                loader:"html-loader",
                // exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                // exclude:/node_modules/
            }
        ]
    },
    plugins: [
		new htmlPlugin({
			template: "./src/index.html",
			filename: "index.html"
        })
        ,
		new extractCss({
			filename: "style.css"
		})
    ],
    devServer:{
        // host: "localhost",
        // hot: true,
        // port:8080,
        // before(app){
        //     app.get('/', function(req,res){
        //         console.log(req.url)
        //         res.end(data)
        //     })
        // }
        // before(app){
        //     app.get('/some/path', function(req, res) {
        //       res.json({ custom: 'response' });
        //     });
        //   }

    }

}