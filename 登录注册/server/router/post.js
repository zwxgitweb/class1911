const Router = require('koa-router');
const {
    find,
    add,
} = require('../mysql/index.js')
const router = new Router();

// 登录查找
router.post('/find', async (ctx) => {
    let name = ctx.request.body.user;
    let pwd = ctx.request.body.pwd;
    let data = await find(name, pwd);
    if (data.code === 1) {
        ctx.body = {
            code: 1,
            msg: '登录成功',
        };
        ctx.cookies.set('name', Buffer.from(name).toString('base64'), {
            maxAge: 1000 * 60 * 60,
        })
    } else if (data.code === 0) {
        ctx.body = {
            code: 0,
            msg: '密码错误'
        };
    } else {
        ctx.body = {
            code: 2,
            msg: '没有改用户请注册',
        };
    }
})

//添加注册
router.post('/add', async (ctx) => {
    let user = ctx.request.body.user;
    let pwd = ctx.request.body.pwd;
    let data = await find(user);
    console.log(data);
    if (data.code === 2) {
        await add(user, pwd);
        ctx.body = {
            code: 1,
            msg: '注册成功',
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '该用户已存在请登录',
        }
    }
})






module.exports = router;