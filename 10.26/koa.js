const Koa = require('koa');
const Router = require('koa-router');
const bodys = require('koa-body-parser') // 接受前端发送的数据

const app = new Koa();
const router = new Router();

// console.log(app);
// --------------------------------------------------------
// app.use(async function(ctx,next){
//     next();
//     // console.log(ctx.request) //返回值
//     if(ctx.request.url === '/'){
//         ctx.response.body='hello aaa!'
//     }
// })

// app.use(async function(ctx,next){
//     next();
//     // console.log(ctx.request) //返回值 
//     if(ctx.request.url === '/aaa'){
//         ctx.response.body='hello bbb!'
//     }
// })

// -------------------------------------------------------------


app.use(bodys())
app.use(router.routes())



router.get('/', async (ctx, next) => {
    ctx.body = `
    <form method='post' action="/ppp">
         <p>用户名：<input name="m_zi" value="ccc"/></p>
         <p>密码：<input name="m_ma" type="password"/></p>
        <p><input type="submit"/></p>
    </form>
    `;
})

router.post('/ppp', async (ctx, next) => {
    await next();
    let m_zi = ctx.request.body.m_zi;

    // let name = ctx.request.body.name;
    // let pwd = ctx.request.body.pwd;
    // console.log(name, pwd)
    if ('ccc' === m_zi) {
        ctx.response.body = '成功';
    }else{
        ctx.response.body = '失败';
    }
})



// router.get('/aaa/:name', async (ctx, next) => {
//     console.log(ctx.params.name);
//     ctx.body = '名字：' + ctx.params.name;
// })

app.listen(3000);