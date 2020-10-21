var  http = require('http');
// 创建server 实例
var server = http.createServer();
// 监听 request 请求事件  设置请求处理函数
server.on('request',(req,res) => {
    //  console.log(res.url)

    // res.write('hello')
    // res.write(' _node.js')
    // res.end()
    // 上面的方式比较麻烦  

    // 可以直接使用end发送响应数据

    // res.end('111'+ req.url) // 返回给客户端的值

    // 1根据不同的请求路径 返回不同响应数据

        // 获取请求路径
        // 判断路径处理处理
        // req.url获取到的是端口号路径；也就是说，所有的url都是以 / 开头的

        var url = req.url

        // if(url === '/'){
        //     res.end('index page')
        // } else if(url === '/a'){
        //     res.end('lagin page')
        // }else{
        //     res.end('404 not found')
        // }


        if(url === '/producs'){
            var prod = [
                {
                    name:'苹果X',
                    pic:8888
                },
                {
                    name:'大菠萝',
                    pic:5550
                },
                {
                    name:'黑莓',
                    pic:1999
                },

            ]

            // 响应内容只能是二进制数据或者字符串
            res.end(JSON.stringify(prod))
        }
   
})

// 绑定端口号 启动服务
server.listen(3000,() => {
    console.log('服务器启动成功，可以访问了')
})