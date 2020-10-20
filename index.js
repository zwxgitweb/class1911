const url = require('url');
const http = require('http');
const qu = require('querystring');

// console.log(qu)
http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=UTF-8');
    let result = url.parse(req.url);
    if(result.pathname=='/api/data'){
        let query = result.query;
       let obj = qu.parse(query);
       res.end('用户名：'+obj.uase+'密码:'+obj.opss)
    }else{
        res.end('hbhb')
    }
    console.log(url)
}).listen(3000)