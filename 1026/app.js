const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-body')
const app = new Koa()
const router = new Router()

app.use(body())


// router.get('/list/:a', async ctx => {
//     ctx.body = '我' + ctx.params.a
// })

router.get('/', async ctx => {
    ctx.body = ` <form action="/list" method="post">
        <p><input name="user" type="text" value="lmt"/></p>
        <p><input name="pwd" type="password" value="1234" /></p>
        <p><input type="submit"/></p>
        </form>`
})
router.post('/list', async (ctx) => {
    let { user, pwd } = ctx.request.body;
    if (user === 'lmt') {
        ctx.response.body = user + 'login + success'+ pwd
    } else {
        ctx.response.body = 'error'
    }
})
app.use(router.routes())
app.listen(8080, () => {
    console.log('111');
})