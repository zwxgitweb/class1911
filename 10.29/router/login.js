const Router = require('koa-router');
const router = new Router();
const {selectLogin} = require('../mysql/config');

router.post('/api/login', async (ctx, next) => {
	await selectLogin(ctx.request.body).then(res => {
		if (res.code && res.msg.length) {
			ctx.cookies.set('user', ctx.request.body.user);
			ctx.body = {
				code: 1,
				msg: "登陆成功"
			};
		} else {
			ctx.body = {
				code: 0,
				msg: "登陆失败"
			};
		}
	})
})

module.exports = router;
