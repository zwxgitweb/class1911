const router = require('koa-router')();
    router.get('/', async (ctx,next) => {
        if(ctx.cookies.get('user')){
            await ctx.render('home.html')   // 跳转到首页  render（）写html 文件
        }else{
             ctx.redirect('/denglu');    // 重定向到  redirect() 写路由 login   不能直接用rendeer 先定义登录的路由  在重新定向     第二步
        }
    })
    // 定义登录的路由
    router.get('/denglu', async (ctx,next) => {    //  第一步
        await ctx.render('login.html');
    })
    module.exports = router;