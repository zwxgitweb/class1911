const http = require('http');
const {URL} = require('url');



http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html;charset=UTF-8");  // 解决中文乱码
    let urls = new URL('http://localhost:9898' + req.url);
    if (urls.pathname == '/url') {
        let data = {}
        let list = urls.search;
        let reg = /([\w]+)=([\w]+)/g;
        list.replace(reg, (a,a1,a2) => {
            data[a1] = a2;
        })

        res.end(`{用户名是：${data.name},年龄是：${data.age}}`);
    }
}).listen(9898, () => {
    console.log('连接成功9898...');
})


// const http = require('http');
// const url = require('url');
// const querystr = require('querystring');   // 字符串转对象


// http.createServer((req, res) => {
//     res.setHeader("Content-type", "text/html;charset=UTF-8"); // 解决中文乱码
//     let urls = url.parse(req.url);
//     if(urls.pathname == '/url'){
//         let list = urls.query;
//         let obj = querystr.parse(list);  // 字符串转对象
//         console.log(obj);
//         res.end(`{用户名是：${obj.name},年龄是：${obj.age}}`);
//     }
// }).listen(9898, () => {
//     console.log('连接成功9898...');
// })