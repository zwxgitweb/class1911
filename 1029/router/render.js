const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx) => {
    if (ctx.cookies.get('user')) {
        await ctx.render('home')
    } else {
        ctx.redirect('/login')
    }
})
router.get('/login', async ctx => {
    await ctx.render('login')
})

module.exports = router