const http = require('http')
const url = require('url')
const querystring = require('querystring')
http.createServer((req, res) => {
    let obj = url.parse(req.url)
    let params = ''
    req.on('data', data => {
        params += data.toString()
    })
    if (req.method === 'GET' && obj.pathname == '/api/list') {
        let params1 = querystring.parse(obj.query)
        res.end(JSON.stringify(params1))
    } else if (req.method === 'POST' && obj.pathname == '/api/list') {
        req.on('end', () => {
            res.end('111' + params)
        })

    } else {
        res.end('get post is not')
    }
}).listen(8080)

