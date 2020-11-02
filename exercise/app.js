const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');    //
const static = require('koa-static');    // 编译静态资源
const bodyParser = require('koa-body-parser');   // 解析post请求传过来的参数模块
const reqDir = require('require-directory');  
// const config = require('./router/render.js');  // 引入单个的抛出文件   当引入多个文件时下载依赖包 require-directory （require 引入）

let app = new Koa();
app.use(views('views', {
    extension : 'html',    // 只编译后缀名为html的 模板
}))
// 编译css文件
app.use(static('views'))   // 编译静态资源 app.use 引入 static('文件夹名称');
app.use(bodyParser());
// app.use(router.routes());
// 引入文件方式   //  当引入多个文件时下载依赖包 require-directory  3个参数  module，‘文件’，{visit: (r) => {app.use(r.routes());}}；
reqDir(module,'router',{   
    visit: (r) => {
        // 在app上 挂在每个文件的 路由
        if(r instanceof Router){
            
            app.use(r.routes());
        }
       
    }
})
app.listen(8080);