
const http = require('http');
const url = require('url');
const path = require('path');
const query = require('querystring')
http.createServer((req,res) => {
    
    console.log(query.unescape(req.url))// 转码

    res.end(req.url)

}).listen(8888);