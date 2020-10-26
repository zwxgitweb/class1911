const http = require('http')
const url = require('url')
const fs = require('fs')
const qs = require('querystring')
const data = require('./mock/data.json')
http.createServer((req, res) => {
    let urlEl = url.parse(req.url)
    if (urlEl.pathname === '/favicon.ico') {
        res.end('11')
    } else if (urlEl.pathname === '/') {
        fs.createReadStream('./index.html').pipe(res)
    } else if (urlEl.pathname === '/list/data') {
        res.end(JSON.stringify(data))
    } else if (urlEl.pathname === '/list') {
        let id = qs.parse(urlEl.query).id
        data.list.map((it) => {
            if (id == it.id) {
                res.end(JSON.stringify(it))
            }
        })
    }
}).listen(8080, () => {
    console.log('启动成功');
})