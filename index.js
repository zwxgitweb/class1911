const http = require('http');
const { read } = require('fs');
http.createServer((i, e) => {
    if (i.url == '/api/list') {
        e.end(JSON.stringify({ name: 'tianxiudong' }))
    } else if (i.url == '/api/add') {
        e.end('玩个鸡儿')
    } {
        e.end('{}')
    }
}).listen(3000);

let opt = {
    port: 3000,
    host: 'localhost',
    method: 'get',
    path: '/api/add'
}

let body = ''

let sd = http.request(opt, (i, e) => {
    i.on('data', (data) => {
        body += data.toString();
        console.log(body);
    })
    i.on('end', (data) => {
        console.log('我不知道',data)
    })
    i.on('error', (err) => {
        console.log('error'+ err )
    })

})

read.end()

