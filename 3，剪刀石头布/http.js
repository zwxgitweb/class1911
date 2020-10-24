const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const game = require('./game');
let server = http.createServer((req, res) => {
    let ourl = url.parse(req.url)
    let pathname = ourl.pathname;
    let qs = querystring.parse(ourl.query);
    let type = qs.type
    if (pathname === '/favicon.ico') {
        res.end('')
    } else if (pathname === '/') {
        fs.createReadStream('./index.html').pipe(res)//读文件通过管道返回
    } else if (pathname === '/game') {
        let resurl = game(type);
        res.end(resurl)
    }
})
server.listen(3000, () => {
    console.log('启动成功')
})