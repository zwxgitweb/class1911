const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-body-parser');
const app = new Koa();
const router = new Router()
// 路由get
app.use(bodyParser());
app.use(router.routes());
router.get('/', async (ctx, next) => {
    // next()
    ctx.body = `    
    <form method="post" action="/getUser">
        <p>用户名：<input name="user" type="text" value="zs"></p>
        <p>密码：<input name="pwd" type="password"></p>
        <p><input type="submit"></p>
    </form>`;
})

router.post('/getUser', async (ctx, next) => {
    await next();
    let user = ctx.request.body.user;
    if ('zs' === user) {
        ctx.request.body = '登录成功'
    } else {
        ctx.request.body = '登录失败'
    }
})

// router.get('/list/:name', async (ctx, next) => {
//     ctx.body = '姓名:' + ctx.params.name;
//     // console.log(ctx.params);
// })

// 原生
// app.use(async (ctx,next) => {
//     next();
//     if(ctx.url==='/'){
//         ctx.body='h';
//     }
//     // console.log(ctx.url)
// });
// app.use(async (ctx,next)=>{
//     if(ctx.url==='/list'){
//         ctx.body='list';
//     }
// })
app.listen(3000)