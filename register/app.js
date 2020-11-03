
const Koa = require('koa');

const app = new Koa();

const views = require('koa-views')

const router = require('koa-router')();

const static = require('koa-static');

const reqDir = require('require-directory');

const bodyParser = require('koa-body-parser');

// 编译css文件
app.use(static('views'));

app.use(views('views', {
	extension: 'html' // 只编译后缀名为html类型的文件
}))

app.use(bodyParser());

router.get('./',(ctx) => {

})

reqDir(module, 'router', {
	visit: (r) => {
		// 在app上挂载每个文件的路由
		app.use(r.routes());
	}
})


app.use(router.routes())

app.listen(3000,()=>{
    console.log('服务启动成功：3000')
})