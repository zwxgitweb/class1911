const Router = require('koa-router');
const router = new Router();
const {query} = require("../mysql/mysql");

router.get('/add/bb', async (ctx) => {
	let {id, num} = ctx.request.query;
	await query(`UPDATE gouwuche  SET shulia = "${num}" WHERE id = "${id}"`).then(res => {
		if (res) {
			ctx.body = {
				code: 1,
				msg: "修改成功"
			};
		} else {
			ctx.body = {
				code: 0,
				msg: "修改失败"
			};
		}
	})
})

module.exports = router;
