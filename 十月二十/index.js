
const http = require('http'); 

//创建服务
http.createServer((req,res) => {
    if(req.url == '/api/list'){
        res.end(JSON.stringify({name:"zs"}));
    }else if(req.url == '/api/add'){
        res.end('是你')
    }else{
        res.end('十月二十号')
    }
}).listen(3000);




// 请求服务
let opt ={
    port : 3000, //端口号
    host : 'localhost',
    method : 'get'
};

let req = http.request(opt,(req,res) => {
    req.on('data',(data) => {
        console.log(data.toString());
    })
    req.on('end',(data) =>{
        console.log('end--',data);
    })
    req.on('error',(err) =>{
        console.log('error:' + err);
    })
})

req.end();