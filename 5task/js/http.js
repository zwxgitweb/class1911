const http = require('http');
const url = require('url');
const fs = require('fs');
const data = require('./data.json');
let s = http.createServer((req, res) => {
    let ourl = url.parse(req.url);
    if (ourl.pathname === '/favicon.ico') {
        res.end()
    } else if (ourl.pathname === '/') {
        fs.createReadStream('../index.html').pipe(res);
    } else if (ourl.pathname === '/api/list') {
        res.end(JSON.stringify(data))
    }
})
s.listen(3000,function(){
    console.log('成功')
})
