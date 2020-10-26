const http = require('http');
const url = require('url');
const fs = require('fs');
const data = require('../mock/data.json')
const path = require('path')
let app = http.createServer((req, res) => {
    let urls = url.parse(req.url).pathname;
    let num = url.parse(req.url, true).query.num;
    if (urls === '/favicon.ico') {
        res.end('');
    } else if (urls === '/all') {
        res.end(JSON.stringify(data.list));
    } else if (urls === '/one') {
        res.end(JSON.stringify(data.list[num].content));
    } else if (urls === '/') {
        fs.createReadStream('../web/index.html').pipe(res);
    } else {
        let url = decodeURIComponent(req.url);
        fs.readFile(path.join('../web', url), (err, data) => {
            if (!err) {
                res.end(data);
            }
        })
    }

})


app.listen(9696, () => {
    console.log('sever is at 9696....');
})