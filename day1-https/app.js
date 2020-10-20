const http = require('http');


http.createServer((req, res) => {
    req.on('data', (data) => {
        let strs = decodeURIComponent(data.toString());
        console.log(strs + 'fsadasdfasfd')
    })
    res.end('发的撒dsfasd');
}).listen(3001, () => {
    console.log('3001...');
})