
// koa post 请求
const Koa = require('koa');
const Router = require('koa-router'); //解析URl 路径
const bodyParser = require('koa-body-parser')  //处理post

const app = new Koa();
const router = new Router();

app.use(bodyParser()); // 使用use挂载  位置需要在处理url 路径之前
app.use(router.routes()); // 挂载

router.get('/', async (ctx) => {
    ctx.response.body = `   
        <form method = "post" action="/getUser">
        <p>用户名：<input name = "user" value = "zs"/> </p>
        <p> 密码：<input name = "psd" type = "password"/> </p>
        <p> <input type = "submit" value = "submit"></p>
        <form>
    `
});

router.post('/getUser', async (ctx, next) => {
    // await next();   // await 把异步变成同步
    let user = ctx.request.body.user;
    if ("zs" === user) {
        ctx.response.body = user + '登陆成功'
    } else {
        ctx.response.body = '登陆失败'
    }
})
app.listen(3001)
