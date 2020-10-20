const http = require('http');

let data = {
    port: 3002,
    host: 'localhost',
    method: 'get',
    path: '/',
}

let req = http.request(data, (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    })
    res.on('end', (data) => {
        console.log('...........');
    })
})

req.end()