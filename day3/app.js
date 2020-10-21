const fs = require('fs')
const path = require('path')
var bool = false;


//                      文件是否存在             文件是可写
fs.access('./a/a.js', fs.constants.F_OK | fs.constants.W_OK, (err, data) => {

    if (err) {

        console.log(` ${'./a/a.js'}${err.code === 'ENOENT' ? '不存在' : '只可读'} `);

        fs.writeFile('./a/a.js', `console.log('你好啊')`, (err) => {
            console.log('写入成功')
        });
        bool = true;
    } else {
        console.log(` ${'/a/a.js'}存在，且可写`);

        fs.writeFile('./a/a.js', `console.log('你好')`, (err) => {
            console.log('创建并写入成功')
        });
        bool = true;

    }
    if (bool) {
        fs.readFile('./a/a.js', (err, data) => {
            console.log(err, data.toString())
            if (err) {
                console.log('出错啦')
            } else {
                fs.writeFile('./b/b.js', data+'这是复制的', () => {
                    console.log('复制成功')
                })
            }
        })
    }


});

