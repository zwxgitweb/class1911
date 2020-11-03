const router = require('koa-router')();



// 抛出一个函数

module.exports = function () {
    // 定义端口号接口
    router.get('/', async (ctx) => {

        // 判断有没有
        if (ctx.cookies.get('usr')) {
            await ctx.render('home');
        } else {
            await ctx.redirect('index'); // 登录界面
        }

    });


    // 定义登录接口
    router.get('/index', async (ctx) => {
        await ctx.render('/index');
    });
}