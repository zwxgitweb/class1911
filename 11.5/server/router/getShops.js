const Router = require('koa-router');
const router = new Router();
const {query} = require("../mysql/mysql");

router.get('/add', async (ctx) => {
	await query(`SELECT * FROM gouwuche`).then(res => {
		let info = {};
		if (res.length) {
			info.code = 1;
		} else {
			info.code = 0;
		}
		info.msg = res;
		ctx.body = info;
	})
})

module.exports = router;
