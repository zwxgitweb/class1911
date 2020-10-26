const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const date = require('./mock/date.json')



let server = http.createServer((a, b) => {
    let urlo = url.parse(a.url) //返回对象
    console.log(urlo.pathname)
    if (urlo.path === '/fava.ico') {
        b.end()
    } else if (urlo.pathname === '/') {
        fs.createReadStream('./index.html').pipe(b)
    } else if (urlo.pathname === '/api/list') {
        b.end(JSON.stringify(date))
        // console.log(date)
    } else {
        let s = a.url;
        fs.readFile(path.join('.', s), (err, data) => {
            if (!err) {
                b.end(data)
            }
        })
    }

})
server.listen(3000, () => {
    console.log('server is at 3000')
})
// createReadStream