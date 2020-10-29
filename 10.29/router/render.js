const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
	if (ctx.cookies.get('user')) {
		await ctx.render('home');
	} else {
		ctx.redirect('/login');
	}
})

router.get('/login', async (ctx, next) => {
	await ctx.render('login');
})

module.exports = router;
