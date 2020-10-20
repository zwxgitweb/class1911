const http = require('http');
const url = require('url');

const querysting = require('querystring');  //内置模块  查询字符串 并解析url或格式化

http.createServer((req,res) => {
    res.setHeader('Content-Type','text/plain;charset=utf-8');  //setHeader() 请球头编码
    let a = url.parse(req.url);  //parse() 把url地址转化成对象...

    if(a.pathname == '/api/list'){

        let query = querysting.parse(a.query);   //密码
        console.log(query);
        res.end(`用户名:${query.a}密码：${query.b}`)
    }else{
        res.end('我是帅哥')
    }

}).listen(3000);