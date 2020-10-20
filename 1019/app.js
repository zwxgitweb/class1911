const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('你好世界')
})
server.listen(8080, () => {
    console.log('服务器运行中')
})