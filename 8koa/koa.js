const Koa = require('koa');
const Router = require('koa-router');//处理请求路径下载插件
// const bodyParser = require('koa-body-parser');//post插件
const app = new Koa();
const router = new Router();
// const bodyParser = new BodyParser()
// app.use((ctx)=>{
//     // console.log(ctx.response)
//     // console.log(ctx.request)
//     // console.log(ctx.url)
//     if(ctx.url==='/'){
//         ctx.body='koa'
//     }

// })
// app.use(bodyParser())
app.use(router.routes())//中间件

router.use(async (ctx,next)=>{
    await next();
    ctx.body='404'
})

router.get('/a', ctx => {
    ctx.body = 'router'
    ctx.body='page a';
    // console.log(ctx.params);

})

// router.post('/api/add', ctx => {
//     ctx.body = 'post'
// })

// app.listen(3000)