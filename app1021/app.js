console.log('hello');

let fs = require('fs');

fs.readFile('./a/a.js', (err, data) => {
    if (err) { // 判断err是否为true ；true代表没有，false代表a.js已经存在
        // 创建 a.js，有就写入，没有就创建
        //    向a.js写入一些东西,
        fs.writeFile('./a/a.js', 'let str = "hello node.js"', (err) => {
            if (err) {
                console.log('写入失败')
            } else {
                console.log('写入成功')
            }
        })


    } else {
       let str =  data.toString();
       fs.writeFile('./b/b.js', str, (err) => {
        if (err) {
            console.log('复制失败')
        } else {
            console.log('复制成功')
        }
    })
    }
})