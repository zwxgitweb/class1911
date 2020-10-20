const http = require('http');

http.createServer((req, res) => {
    if (req.url == '/data' && req.method == 'GET') {
        res.end(JSON.stringify({
            name: '张三s',
            age: 20
        }))
    }else{
        res.end(JSON.stringify({}));
    }
}).listen(3002,()=>{
    console.log('......');
})



