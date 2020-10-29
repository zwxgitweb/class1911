const Router = require('koa-router');
const router = new Router();
const {selectLogin} = require('../mysql/config');

router.post('/api/login', async (ctx, next) => {
	await selectLogin(ctx.request.body).then(res => {
		// 根据查询完之后的code状态及查询到的长度判断是否登陆成功
		if (res.code && res.msg.length) {
			// 在服务端保存用户信息
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
