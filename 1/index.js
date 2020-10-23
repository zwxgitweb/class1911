// const url = require('url');
// const http = require('http');
// const qu = require('querystring');
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
//     let result = url.parse(req.url);
//     if (result.pathname == '/api/data') {
//         let query = result.query;
//         let obj = qu.parse(query);
//         res.end('用户名：' + obj.uase + '密码:' + obj.opss)
//     } else {
//         res.end('hbhb')
//     }
// }).listen(3000)


// 添加
// const url = require('url');
// const http = require('http');
// const qu = require('querystring');
// http.createServer((req,res)=>{
//     let resurl = url.parse(req.url);
//     if(resurl.pathname=='/api/add'){
//         let str = resurl.query;
//         let obj = qu.parse(str);
//         res.end('用户名：'+obj.num+'密码：'+obj.m)
//     }else{
//         res.end('hhhh')
//     }
// }).listen(3000);
// const fs = require('fs');
// try{
//     fs.unlinkSync('./a.js');
//     console.log('已删除文件');
// }catch(err){
//     console.log(err)
// }

// fs.unlink('./a.js',(err)=>{
//    if(err) throw err;
//    console.log('已成功删除')
// })

// console.log(__dirname)
// console.log('准备打开文件')
// fs.stat('a.js', (err, stats) => {
//     // console.log(stats.isFile());
//     if (err) {
//         return console.error(err)
//     }
//     console.log(stats)
//     console.log('读取成功');
//     console.log("是否为文件(isFile) ? " + stats.isFile()); 
// })

// console.log('-------------------')
// console.log("准备写入文件");
// fs.writeFile('b', "console.log('1')", (err) => {
//     if(err){
//         return console.error(err)
//     }
//     console.log('写入成功')
// })

// 作业
var fs = require('fs');
let path = require('path');
// console.log(path,'-----------------');
fs.mkdir('./app/', (err) => {
    // if (err) {
    //     return console.error(err);
    // }
    // console.log('成功')
    fs.mkdir('./app/a', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('a')
        console.log('-----------------------')
        fs.open('a.js', 'r', (err, fd) => {
            if (err.code === 'ENOENT') {
                console.log(err)
                fs.writeFile('./app/a/a.js', "console.log('hello,aj')", (err) => {
                    if (err) {
                        return console.error(err)
                    }
                    console.log('a.js写入成功')
                })
            }
        });
    })
    fs.mkdir('./app/b', (err) => {
        // if (err) {
        //     return console.error(err);
        // }
        // console.log('b');
        let data = fs.readFileSync(path.join(__dirname, '/app/a/a.js'));
        fs.writeFile('./app/b/b.js', data.toString(), (err) => {
            if (err) {
                return console.error(err)
            }
            console.log('b.js写入成功')
        })

    })
    fs.mkdir('./app/c', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('c')
    })
    fs.writeFile('./app/app.js', "console.log('hello')", (err) => {
        if (err) {
            return console.error(err)
        }
        console.log('写入成功')
    })
});




