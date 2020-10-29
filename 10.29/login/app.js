const Koa = require('koa');
const Router = require('koa-router'); // 帮助我们处理路由
const views = require('koa-views'); // 编译模版
const static = require('koa-static'); // 编译静态资源
const reqDir = require('require-directory'); // 引入文件夹
const bodyParser = require('koa-body-parser');

const app = new Koa();
const router = new Router();

// 编译css文件
app.use(static('views'));

app.use(views('views', {
	extension: 'html' // 只编译后缀名为html类型的文件
}))


app.use(bodyParser());
app.use(router.routes());

reqDir(module, 'router', {
	visit: (r) => {
		// 在app上挂载每个文件的路由
		app.use(r.routes());
	}
})

app.listen(3000);