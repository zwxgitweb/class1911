const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const static = require('koa-static')
const Router = require('koa-router');
const { all ,tian} = require('./mysql/index.js')
const app = new Koa();
const router = new Router();

app.use(static(path.join(__dirname, '../sct')));
app.use(views(path.join(__dirname, '../sct'), {
    extension: 'html'
}))

app.use(router.routes());

router.get('/', async (ctx) => {
    await ctx.render('inadd.html');
})

router.get('/add', async (ctx) => {
    let data = await all();
    ctx.body = data
})

router.get('/tian', async (ctx) => {
    let nam = ctx.query.text;
    console.log(nam.split(','));
    await tian(nam)
    ctx.body = await all();
})


app.listen(8888, () => {
    console.log('已连接服务器....');
})