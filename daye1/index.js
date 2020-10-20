let http = require('http')
let url = require('url')
http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html;charset=UTF-8');
    let urll = url.parse(req.url);
    if (urll.pathname == '/url') {
        var sd = {}
        let list = urll.query;
        let obj = /([\w]+)=([\w]+)/g;
        list.replace(obj, (i, one, two) => {
            sd[one] = two
        })
        res.end(sd.name+sd.age)
    }
   
}).listen(3000,()=>{
    console.log('连接成功')
})

