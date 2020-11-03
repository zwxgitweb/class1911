
const Koa = require('koa');

const router = require('koa-router')(); //处理 路由 

const views = require('koa-views'); // 编译模板  模块

const static = require('koa-static') // 编译静态资源 模块

const reqDir = require('require-directory'); // 引入文件夹
// const config = require('../router/render');


let app = new Koa(); // 实例化

app.use(static('../')) ; // 编译 css 文件
app.use(views('../views',{
    extension:'html',
})); 

app.use(router.routes()); // 挂载 router 路由 中间件


// // 定义端口号接口
// router.get('/',async (ctx) => {

//     // 判断有没有
//     if(ctx.cookies.get('usr')){
//         await ctx.render('home');
//     }else{
//         await  ctx.redirect('index'); // 登录界面
//     }
     
// });


// // 定义登录接口
// router.get('/index', async (ctx) => {
//     await ctx.render('/index');
// });

reqDir(module, '../router', {
	visit: (r) => {
		// 在app上挂载每个文件的路由
        // app.use(r.routes());
	}
})

// 监听 端口号
app.listen(3000,() =>{
    console.log('服务启动成功：3000');
});