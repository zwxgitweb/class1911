const http = require('http')
http.createServer((req, res) => {
    if (req.url == '/api/list') {
        res.end(JSON.stringify({ name: 'lmt', age: '123' }))
    } else if (req.url == '/data') {
        res.end(JSON.stringify({ name: 'lmt1', age: '123' }))
    } else {
        res.end(JSON.stringify({ name: 'lmt2', age: '123' }))
    }

}).listen(8080, () => {
    console.log('成功');
})


let opt = {
    port: '8080',
    host: 'localhost',
    method: 'get',
    path: '/api/list'
}
let req = http.request(opt, (req, res) => {
    req.on('data', data => {
        console.log(data.toString());
    })
    req.on('end', end => {
        console.log("end");
    })
    req.on('error', err => {
        console.log(err);
    })
})
req.end()