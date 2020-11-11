const Router = require('koa-router');
const router = new Router();
const { selectLogin } = require('../mysql/config')

router.post('/api/login', async (ctx, next) => {
    // console.log('-------')
    await selectLogin(ctx.request.body).then(res => {
        // console.log(res, '________________');
        // console.log(ctx.request.body,"1111111111111111")
        if (res.code && res.msg.length) {
            ctx.cookies.set('user',JSON.parse(ctx.request.body))
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