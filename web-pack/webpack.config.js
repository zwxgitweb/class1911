const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module:{
    //     reles:[
    //         {
    //             test:/\.css$/,
    //             use:['style-loader','css-loader']
    //         }
    //     ]  
    //     // css-loader:允许webpack打包依赖的css文件     　　
    //     // style-loader:将css-loader处理后的样式注入到html的head内

    //     // reles:[
    //     //     {
    //     //         test:/\.js$/,
    //     //         loader:'bable-loader',
    //     //         // 打包除了这个文件之外的文件
    //     //         exclude:path.resolve(__dirname,"./node_modules"),
    //     //         // 打包包括的文件
    //     //         include:path.resolve(__dirname,'./src'),
    //     //         options:{
    //     //             'presets':['latest']
    //     //         }
    //     //     }
    //     // ]
    // }
}