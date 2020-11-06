const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static')
const Router = require('koa-router');
const { all, tian, shan } = require('./mysql/index.js')
const app = new Koa();
const router = new Router();

app.use(static(path.join(__dirname, '../web_ys')));
app.use(views(path.join(__dirname, '../web_ys'), {
    extension: 'html'
}))
app.use(router.routes());

router.get('/', async (ctx) => {
    await ctx.render('str.html');
})

router.get('/add', async (ctx) => {
    let data = await all();
    ctx.body = data
})

router.get('/tian', async (ctx) => {
    let val = ctx.query.val;
    await tian(val)
    ctx.body = await all();
})

router.get('/shan', async (ctx) => {
    let val = ctx.query.val;
    await shan(val)
    ctx.body = await all();
})

app.listen(6969, () => {
    console.log('已连接服务器....');
})