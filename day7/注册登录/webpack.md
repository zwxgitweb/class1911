
##     webpack

###    第一种写法
1. 首先全局安装
 npm i webpack webpack-cli -g
2. 本地安装
npm i webpack webpack-cli --save
3. cmd 输入
webpack --entry './app.js(要打包的js文件)' --output './dist/index.js(打包文件的位置)'
4. 最后输入
    webpack   打包完毕

# 第二种写法
1. 首先全局安装
 npm i webpack webpack-cli -g
2. 本地安装
npm i webpack webpack-cli --save
3. 在当前的根目录下 创建文件夹 webpack.conflg.js
    const path = require('path')
    module.exports = {
        //  指定入口文件
            //  entry : './app.js',
            //  entry : ['./app.js','./app2.js'],  // 传入多个打包文件
        entry :{
            app1:'./app.js',
            app2:'./app2.js',
        },
        // 指定打包出口文件  打包多个js 文件 到打包出口  name 指entry.app1 / entry.app2;
            output:{
                path: path.join(__dirname,'/bundle'), // 绝对路径
                filename:'[name].js'   
            }
    }