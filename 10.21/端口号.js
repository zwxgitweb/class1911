//  所有联网的程序都需要进行网络通信
// 计算机中只有一个物理网卡，而且同一个局域网中，网卡的地址必须是唯一的
// 网卡是通过唯一的IP地址来进行定位的
// IP地址用来定位计算机
// 端口号用来定位具体的应用程序
// （所有需要联网通信的软件都必须具有端口号）

 let http = require('http')

 var server = http.createServer()

 server.on('request',(req,res) =>{
     console.log('请求我的客户端的端口号是'+ req.socket.remoteAddress+'/' + req.socket.remotePort) 
     //req.socket.remotePort 我的端口号 49474 //49479//都不一样
     res.end(req.socket.remoteAddress+'/' + req.socket.remotePort)
 })

 server.listen(3000,() => {
     console.log('成功')
 })