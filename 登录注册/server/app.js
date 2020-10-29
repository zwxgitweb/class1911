const Koa = require('koa');
const path = require('path');
const Router = require('koa-router')
const requireDir = require('require-directory');
const bodys = require('koa-bodyparser');
const views = require('koa-views');
const static = require('koa-static');

const {
    port
} = require('./public/index.js');

const app = new Koa();
const router = new Router();

app.use(bodys())
app.use(static(path.join(__dirname, '../web')));
app.use(views(path.join(__dirname, '../web'), {
    extension: 'ejs',
}))

requireDir(module, './router', {
    visit: r => {
        if (r instanceof Router) {
            app.use(r.routes());
        }
    }
})


app.listen(port, () => {
    console.log(`succeed is ${port}...`);
})