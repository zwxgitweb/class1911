const router = require('koa-router')();
const {zhuceData} = require('../mymql/config')
router.post('/api/zhuce',async (ctx,next) => {
    await zhuceData(ctx.request.body).then( res => {
        if(res.code && res.msg.insertID){
            ctx.body = {
				code: 1,
				msg: "注册成功"
			};
        }else{
            ctx.body = {
				code: 0,
				msg: "注册失败"
			};
        }
    })
})
module.exports = router;