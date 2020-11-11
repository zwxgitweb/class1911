const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const static = require('koa-static');//解析css, js模板
const { check, amend, delShop,isChecked } = require('./mysql/mysql')

let app = new Koa();
let router = new Router();


app.use(static('../views'))//挂载css js
app.use(router.routes())
app.use(views('../views'), {
    extension: 'html'
})

router.get('/', async (ctx, enxt) => {
    await ctx.render('index')
})
// 渲染页面
router.get('/api/apply', async (ctx, next) => {
    await check().then(res => {
        ctx.body = {
            code: 1,
            data: res
        }
    })
})
// 修改数量
router.get('/api/num', async (ctx, next) => {
    let { id, num } = ctx.request.query;
    await amend(id, num).then(res => {
        ctx.body = {
            code: 1,
            data: res
        }
    })
});

// 单选框
router.get('/api/checked', async (ctx, next) => {
    console.log(ctx.request.query)
    let { id, ischecked } = ctx.request.query;
    await isChecked(id, ischecked).then(res => {
        ctx.body = {
            code: 1,
            data: res
        }
    })
});

// 删除
router.get('/api/delShop', async (ctx) => {
    let { id } = ctx.request.query;
    await delShop(id).then(res => {
        ctx.body = {
            code: 1,
            data: res
        }
    })
})

app.listen(3000)