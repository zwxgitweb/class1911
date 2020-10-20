var http = require('http');

// 创建服务
http.createServer((req, res) => {
    if(req.url == '/api/list'){
        res.end(JSON.stringify({name: 'zs'}))
    } else if(req.url == '/api/add'){
        res.end('1644896')
    } else{
        res.end('{}')
    }
}).listen(3000);

let obj = {
    port: 3000, // 端口号
    host: 'localhost', // 请求域名
    method: 'get', // 请求类型
    path: '/api/add'
}

let body = '';

// 发起请求
let req = http.request(obj, (req, res) => {
    req.on('data', (data) => {
        body += data.toString();
        console.log(body);
    })
    req.on('end', (data) => {
        console.log('1233544', data);
    })
    req.on('error', (err) => {
        console.log('error:' + err);
    })
});

// 结束响应
req.end();