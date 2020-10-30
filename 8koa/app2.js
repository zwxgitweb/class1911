const Koa = require('koa');
// const Router = require('koa-router');//处理路由
const views = require('koa-views');//加载模板html
const static = require('koa-static');//编译器资源
const reqDir = require('require-directory');//引入文件夹
const bodyParser = require('koa-body-parser');

const app = new Koa();
// const router = new Router();

// 编译css文件
app.use(static('iogin'));

// 加载模板html
app.use(views('iogin', {
    extension: 'html'
}))

app.use(bodyParser())

// 挂载路由中间件
// app.use(router.routes())

// 引入文件夹3个参数1引入类型，2文件夹名字，3{进行配置}
reqDir(module, 'router', {
    visit: (r) => {
        app.use(r.routes())
    }
})

app.listen(3000);