const Router = require('koa-router');
const router = new Router();
const {registerUser} = require('../mysql/config');

router.post('/api/register', async (ctx, next) => {
	await registerUser(ctx.request.body).then(res => {
		// 根据查询完之后的code状态及查询到的长度判断是否登陆成功
		if (res.code && res.msg.insertId) {
			ctx.body = {
				code: 1,
				msg: "注册成功"
			};
		} else {
			ctx.body = {
				code: 0,
				msg: "注册失败"
			};
		}
	})
})

module.exports = router;