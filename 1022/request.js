const http = require('http')

//get
// let opt = {
//     port: '8080',
//     host: 'localhost',
//     method: 'get',
//     path: '/api/list?name=lmt&age=18'
// }
// let req = http.request(opt, req => {
//     req.on('data', data => {
//         console.log(data.toString());
//     })
//     req.on('end', () => {
//     })
// })
// req.end()

//post      
let opt = {
    port: '8080',
    host: 'localhost',
    method: 'post',
    path: '/api/list'
}
let req = http.request(opt, req => {
    req.on('data', data => {
        console.log(data.toString());
    })
    req.on('end', () => {
    })
})
req.write(JSON.stringify({ name: 'lmt', age: 18 }))
req.end()