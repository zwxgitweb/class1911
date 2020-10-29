const Router = require('koa-router')
const router = new Router()
const {  register } = require('../moudle/config')
// const { contion } = require('../postting/index')
router.post('/user/register', async (ctx, next) => {
    let { username,password } = ctx.request.body
    // let user = await rigerText(username)
    // ctx.body = user ? contion({code: 0,msg: '用户已存在'}) : await register(username,password) ? contion({code: 1,msg: '注册成功'}) : contion({ code: 0,msg: '注册失败'})
    // next()
    await register(username,password).then(res=>{
        if(res.msg.insertId){
            ctx.body = {
                code:1,
                msg:'注册成功'
            }
        }else{
            ctx.body = {
                code:1,
                msg:'注册成功'
            }
        }
    })
})

module.exports = router