const Koa = require('koa');
const Router = require('koa-router')
const views = require('koa-views');//渲染模板
const app = new Koa();
const router = new Router();


router.get('/', async (ctx) => {
    if (ctx.cookies.get('user')) {
        await ctx.render('index2')
    } else {
        ctx.redirect('/login')
    }
})
router.get('/login', async (ctx) => {
    await ctx.render('index')//渲染模板
})

router.get('/userlogin', async (ctx) => {
    ctx.cookies.set('user', 'zs')
    ctx.body = {
        code: 1,
        tet: '登录成功'
    }
})

app.use(views('log', {//渲染模板
    extension: 'html'
}))

app.use(router.routes())
app.listen(3000)