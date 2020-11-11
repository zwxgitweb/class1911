
const Router = require('koa-router');//处理路由
const router = new Router();

//定义path/路由
router.get('/', async (ctx) => {
    if (ctx.cookies.get('user')) {
        await ctx.render('index2');
    } else {
        ctx.redirect('/login')
    }
})

//定义登录路由
router.get('/login', async (ctx) => {
    await ctx.render('login')
})


module.exports = router



