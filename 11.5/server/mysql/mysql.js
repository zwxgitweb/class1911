const mysql = require('mysql');

let mysqls = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

//连接数据库
mysqls.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('连接mysql.....');
    }
})


//请求数据库
function query(querys) {
    return new Promise((res, rej) => {
        mysqls.query(querys, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}
module.exports = {
    query,
}