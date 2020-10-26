

let http = require('http'); // 服务 模块

let url = require('url'); // 路径 模块

let fs = require('fs') // 文件操作 模块

let data = require('./data.json'); // 读取 模拟数据

let server = http.createServer((req,res) => {
    let urls = url.parse(req.url).pathname;
    if(urls === '/favicon.ico'){
        res.end();
        return ;
    }else if(urls === '/'){
        fs.createReadStream('../index.html').pipe(res)
    }else if(urls === '/api/list'){
        res.end(JSON.stringify(data))
    }

})

server.listen(3000, () => {
    console.log('服务启动成功')
})

