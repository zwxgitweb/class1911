const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx) => {
    let cookName = ctx.cookies.get('name');
    if (cookName) {
        let user = new Buffer(cookName, 'base64').toString();
        await ctx.render('html/home', {
            name: user
        });
    } else {
        ctx.redirect('/login');
    }
})

router.get('/login', async (ctx) => {
    await ctx.render('html/index');
})

router.get('/signin', async (ctx) => {
    await ctx.render('html/signin');
})


module.exports = router;