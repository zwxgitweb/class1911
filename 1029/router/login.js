const Router = require('koa-router')
const router = new Router()
const { login } = require('../moudle/config')
router.post('/user/login', async ctx => {
    await login(ctx.request.body).then(res => {
        if (res.code  && res.msg.length) {
            ctx.cookies.set('user', ctx.request.body.username);
            ctx.body = {
                code: 1,
                msg: '登录成功'
            }
        } else {
            ctx.body = {
                code: 0,
                msg: '登录失败'
            }
        }
    })

})

module.exports = router