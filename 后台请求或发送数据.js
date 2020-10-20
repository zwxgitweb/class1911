// // 创建一个http 模块
// const http = require('http');
// // 创建一个 http 服务
// http.createServer((ret, res) => {
//     // 发送 http 头部
//     // http 状态值 200 ：ok
//     // 内容类型 text/plain
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // 发送响应的数据
//     res.end('hello word!!!!!!!!!!!!!'); // 在浏览器中打开 localhost:3000   (3000 端口号)
// }).listen(8000);

// 创建一个http 模块
const http = require('http');
// 创建一个 http 服务
http.createServer((ret, res) => {
    // 发送 http 头部
    // http 状态值 200 ：ok
    // 内容类型 text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if(ret.url == '/api/list'){
        res.end('/api/list')
    }else if(ret.url == '/api/benben'){
        res.end('benben');
    }else{
        res.end('default')
    }
}).listen(8000);

let opt = {
    port : 8000,  // 端口号
    host:"localhost",  // 请求域名
    method:'get',   // 请求类型
    path:'/api/benben',  // 请求目录或文件
}
let body = '';
// 发起请求
let req = http.request(opt,(req,res) => {
    req.on('data',(data) => { 
        body += data.toString();
        console.log(body,'+++++++++++')
    })
    req.on('end', (data) => {
        console.log('end _______',data);
    })
    req.on('error', (err) => {
        console.log('error :' + err);
    })
})
// 结束响应
req.end();