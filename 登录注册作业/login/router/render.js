/*
 * @FilePath: /l9/router/render.js
 * @Author: Florence
 * @Date: 2020-10-29 09:48:39
 * @Last Modified By: Florence
 * @LastEditTime: 2020-10-29 10:02:18
 */

const Router = require('koa-router');
const router = new Router();

// 定义path / 路由
router.get('/', async (ctx, next) => {
	// 判断当前有没有用户登陆
	if (ctx.cookies.get('user')) {
		// 跳转到首页
		await ctx.render('home');
	} else {
		ctx.redirect('/login');
	}
})

// 定义登陆路由
router.get('/login', async (ctx, next) => {
	await ctx.render('login');
})

module.exports = router;
