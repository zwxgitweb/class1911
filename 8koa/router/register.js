const Router = require('koa-router');
const router = new Router();
const { registerUseer } = require('../mysql/config')

router.post('/api/register', async (ctx, next) => {
    await registerUseer(ctx.request.body).then(res => {
        // console.log(ctx.request.body)
        // if (res.code && res.msg.insertId) {
        //     ctx.body = {
        //         code: 1,
        //         msg: '注册成功'
        //     }
        // } else {
        //     ctx.body = {
        //         code: 0,
        //         msg: '注册失败'
        //     }
        // }
    })
})

module.exports = router