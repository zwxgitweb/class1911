const Koa = require('koa');
const Router = require('koa-router'); 
const views = require('koa-views'); 
const static = require('koa-static'); 
const reqDir = require('require-directory'); 
const bodyParser = require('koa-body-parser');

const app = new Koa();
const router = new Router();

app.use(static('views'));

app.use(views('views', {
	extension: 'html' 
}))

app.use(bodyParser());

app.use(router.routes());

reqDir(module, 'router', {
	visit: (r) => {
		app.use(r.routes());
	}
})

app.listen(3000);
