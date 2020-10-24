const http = require('http');
const qs = require('querystring')


let data = {
    port: 6000,
    host: 'localhost',
    method: 'POST',
    path: '/fads?fdsa=fsad',
}

let datas = {
    name:'zs',
    age:20,
}

// console.log(qs.stringify(datas));

let req = http.request(data, (res) => {
    res.on('data', (data) => {
        console.log(data.toString());
    })
    res.on('end', () => {
        console.log('.........');
    })
})

req.write(qs.stringify(datas))


req.end()