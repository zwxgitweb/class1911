const path=require('path');
const htmlsp=require('html-webpack-plugin');

module.exports={
    entry:{
        app:"./index.ts"
    },
    output:{
        path:path.join(__dirname,'str'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:'ts-loader',
            }
        ]
    },
    plugins:[
        new htmlsp({
            template:'./index.html'
        })
    ]
}