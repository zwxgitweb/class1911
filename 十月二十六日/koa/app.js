
 

 ////  Koa  get 请求

const Koa = require('koa');

const app = new Koa();

// 中间件
app.use(async function(ctx,next){
    next();  // 下一步
    ctx.response.body = '你好'   //response缩写 ctx === ctx.response 的  响应的意思

})


app.listen(3000)