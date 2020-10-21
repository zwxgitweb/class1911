var fs = require('fs');

fs.mkdir('./app', () => {
    console.log('ok')
});

fs.mkdir('./app/a', () => {
    console.log('ok_a')
});

fs.mkdir('./app/b', () => {
    console.log('ok_b')
});

fs.writeFile('./app/a/a.js', '12345', () => {
    console.log('数据已被追加到文件--a');
});

fs.writeFile('./app/b/b.js', '12345', () => {
    console.log('数据已被追加到文件--b');
});

var ccc = 'console.log("hello");'
fs.writeFile('./app/app.js', ccc, () => {
    console.log('数据已被追加到文件--c');
});

fs.access('./app', (a, b) => {
    if (a) {
        fs.mkdir('./app', () => {
            console.log('ok___1')
            fs.writeFile('./app/a/a.js', '12345', () => {
                console.log('数据已被追加到文件');
            });
        });
    } else {
        console.log('文件已存在')
    }
});
fs.copyFile('./app/a/a.js', './app/b/b.js', () => {
    console.log('拷贝成功');
});