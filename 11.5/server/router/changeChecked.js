const Router = require('koa-router');
const router = new Router();
const {query} = require("../mysql/mysql");

router.get('/add/aa', async (ctx) => {
	let {id, checked} = ctx.request.query;
	let str = id ? `UPDATE gouwuche SET pandui = "${checked}" WHERE id = "${id}"` : `UPDATE gouwuche SET pandui = "${checked}"`;
	await query(str).then(res => {
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