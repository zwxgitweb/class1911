const http = require('http');
const qs = require('querystring')
const url = require('url')
http.createServer((req, res) => {
    console.log(url.parse(req.url,true))
    let obj = '';
    req.on('data', (data) => {
        obj += data.toString();
    })

    if (req.method == 'POST' && req.url == '/') {
        req.on('end', () => {
            obj = qs.parse(obj)
            res.end(JSON.stringify(obj))
        })
    }

}).listen(6000)