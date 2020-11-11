// 线上
const {CleanWebpackPlugin} = require('clean-webpack-plugin')//es6{}引入插件，清除webpack包

module.exports={
    plugins:[
        new CleanWebpackPlugin()
    ]
}