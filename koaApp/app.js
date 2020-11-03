const Koa = require('koa'); // 加载 koa 模块

// const fs = require('fs') // 加载 文件读取 fs 模块

const rout = require('koa-router')(); // 处理路径的模块，返回的是一个函数，所以要在次调用

const boayParser = require('koa-bodyparser'); //解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中。

let app = new Koa(); // 实例化 koa 模块

app.use(boayParser()) // 挂载到 koa 上 ，必须要在 router 之前挂载， 顺序很重要

app.use(rout.routes()); // 挂载到 koa 上

app.use(async (ctx, next) => {

    // fs.readFile('./index.html',(err,data) =>{if(err){ console.log('读取失败')} else{}})  
    // ctx.response.body = '<h1> hello koa</h1>' // 返回页面
    
    // ctx.response.body = `<h1>Index</h1>
    // <form action="/signin" method="post">
    //     <p>Name: <input name="name" value="koa"></p>
    //     <p>Password: <input name="password" type="password"></p>
    //     <p><input type="submit" value="Submit"></p>
    // </form>`;

    await next()
})
rout.get('/', async (ctx) => {
    ctx.response.body = '无情啊兄弟'
})

rout.get('/hello/:name', async (ctx) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1> hello ${name}</h1>`;
})
// 监听端口号：

app.listen(3000, () => {
    console.log('3000服务启动成功')
})