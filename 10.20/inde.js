const http = require('http');
http.createServer((a, b) => {
    b.end('bbb')
}).listen(3000)


let opt = {
    port: 3000,
    host: 'localhost',
    method: 'get',
    // path:'/'
}

let req = http.request(opt, (a, b) => {
    a.on('date', (ccc) => {

    })
})