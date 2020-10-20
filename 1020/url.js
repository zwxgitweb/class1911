const http = require('http')
const url = require('url')


http.createServer((req, res) => {
    console.log(url.parse);
    // res.end('11')
}).listen(8080)