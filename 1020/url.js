const http = require('http')
const url = require('url')
const querystring = require('querystring')


http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')

    let result = url.parse(req.url)
    if (result.pathname == '/api/list') {
        let obj = querystring.parse(result.query)
        res.end(`用户名：${obj.user}密码:${obj.pad}`)
    } else {
        res.end('123')
    }
}).listen(8080)