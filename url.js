// 例子一
        // const url = require('url');
        // const http = require('http');
        // const querystring = require('querystring');
        // http.createServer(function (ret , res){
        //     res.setHeader('Content-Type','text/plain;charset=UTF-8');
        //     let result = url.parse(ret.url);
        //     console.log(querystring)
        //     if(result.pathname == '/api/benben'){
        //         let query = result.query;
        //         let obj = querystring.parse(query);
        //         console.log(obj)
        //         res.end("用户名:" + obj.user + "密码:" + obj.pwd);
        //     }else{
        //         res.end("hhhhh__________");
        //     }
        // }).listen(8080);


// 例子二
//创建一个http模块
const httpp = require('http')
//创建一个url模块
const urls = require('url');
// 创建一个http 服务
httpp.createServer( (ret , res) => {
    // 设置 解决中文乱码
    res.setHeader('Content-Type','text/html;charset=UTF-8');
    // url 自带的字符串转对象
    let urlss = urls.parse(ret.url);
    // 判断 urlss.pathname(urlss的路径名称) 是否等于 请求的 路径名称
    if(urlss.pathname == '/anjing/naonao'){
        let obj = {};
        // name=zs&pad=123
        let reg = /([\w]+)=([\w]+)/g;
        let list = urlss.query;
        console.log(list)
        list.replace(reg, (da,a1,a2) => {
            console.log(da,a1,a2)
            obj[a1] = a2;
        })
        res.end(`{用户名:${obj.name}},工作:${obj.job};`);
    }else{
        res.end('报错——————————');
    }
}).listen(8080,() => {
    console.log('连接成功++++++');
})