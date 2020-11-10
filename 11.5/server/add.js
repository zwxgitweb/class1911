
const Koa = require('koa');
const views = require('koa-views');
const requierDir = require('require-directory');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();

app.use(static("../gouwu")); 

app.use(views("../gouwu", { 
	extension: "html" 
}))

requierDir(module, "./router", {
	visit(r) {
		if (r instanceof Router) {
			app.use(r.routes());
		}
	}
})


app.listen(6969, () => {
    console.log('已连接服务器....');
})