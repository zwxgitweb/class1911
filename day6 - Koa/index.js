const Koa = require('koa'); 
const Router = require('koa-router');  //服务器路由
const bodys = require('koa-bodyparser');  // 接受post请求数据
const app = new Koa();
const router = new Router();
app.use(bodys());
app.use(router.routes())


router.get('/list', async (ctx) => {
    ctx.body = `
    <form method="post" action="/home">
    <p>用户名：<input name="names" value="zs"/></p>
    <p>密码：<input name="pawd" type="password"/></p>
    <p><input value="提交"  type="submit"/></p>
    </form>
    `
})

router.post('/home', async (ctx) => {
    let name = ctx.request.body.names;
    let pawd = ctx.request.body.pawd;
    ctx.body = `${name}，登录成功`;
})


app.listen(3636, () => {
    console.log('连接成功');
})