const Router = require('koa-router');
const router = new Router();
const {query} = require("../mysql/mysql");

router.get('/add/cc', async (ctx) => {
	let {id} = ctx.request.query;
	await query(`DELETE FROM gouwuche WHERE id="${id}"`).then(res => {
		if (res) {
			ctx.body = {
				code: 1,
				msg: "删除成功"
			};
		} else {
			ctx.body = {
				code: 0,
				msg: "删除失败"
			};
		}
	})
})

module.exports = router;
