const Koa = require('koa');
const Router = require('koa-router');//定义路由
const views = require('koa-views');//解析HTML模板
const static = require('koa-static');//解析css, js模板
const { addVal, findList, findId, findFinished,delFinishList} = require('./mysql/config');

const app = new Koa();
const router = new Router();


app.use(static('../str'))//挂载css js
app.use(views('../str'), {
    extension: 'html'//挂载html
});
app.use(router.routes());
router.get('/', async (ctx, next) => {
    await ctx.render('index')
})
router.get('/api/sendval', async (ctx, enxt) => {
    let val = ctx.request.query.val;
    if (val !== 'undefined') {
        await addVal(val).then(res => {
            ctx.body = res;
        })
    } else {
        await findList().then((res => {
            ctx.body = {
                code: 1,
                data: res
            }
        }))
    }

});

// 定义删除选中
router.get('/api/del', async (ctx, enxt) => {
    let id = ctx.request.query.id;
    await findId(id).then(res => {
        ctx.body = res
    })
})

//查找已经完成的事项
router.get('/api/findFinish', async (ctx) => {
    await findFinished().then(res => {
        ctx.body = {
            code: 1,
            data: res
        }
    })
})


// 删除点击的待办及完成的事项

router.get('/api/delList', async (ctx) => {
    let id = ctx.request.query.id;
    await delFinishList(id).then(res=>{
        ctx.body = {
            code: 1,
            data: res
        }
    })
})
app.listen(3000);