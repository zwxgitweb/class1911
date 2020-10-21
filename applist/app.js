let fs = require('fs');

// let path = './applist/a/a.js';
let path = require('path');
fs.readFile(path.join(__dirname, './a/a.js'), (err, res) => {
    if (err) {
        fs.writeFile(path.join(__dirname, './a/a.js'), '写的内容ddddd', (err) => {
        })
    } else {
        fs.readFile(path.join(__dirname, './a/a.js'), 'utf8', (err, data) => {
            let dataa = data;
            fs.writeFile(path.join(__dirname, './b/b.js'), dataa, (err) => {
            })
        })
        fs.unlink(path.join(__dirname, './c/c.js'), (err) => {
        })
    }
})