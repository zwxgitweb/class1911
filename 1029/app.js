const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const static = require('koa-static')
const bodyParser = require('koa-body-parser')
const requireDir = require('require-directory')
const app = new Koa()
app.use(static('static'))
app.use(views('static', {
    extension: 'html'
}))
app.use(bodyParser())
requireDir(module, './router', {
    visit: (r) => {
        if (r instanceof Router) {
            app.use(r.routes());
        }
    }
})
app.listen(8080, () => {
    console.log('yes');
}) 