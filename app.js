const http = require('http');


http.createServer((req, res) => {
    req.on('data', (data) => {
        let strs = decodeURIComponent(data.toString());
        console.log(strs)
    })
    res.end('发的撒ds');
}).listen(3001, () => {
    console.log('3001...');
})