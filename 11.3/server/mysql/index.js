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
function all() {
    return new Promise((res, rej) => {
        mysqls.query('SELECT * FROM list', (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}

//添加数据库
function tian(name) {
    return new Promise((res, rej) => {
        mysqls.query(`INSERT INTO list (name) VALUES ('${name}')`, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}
//删除数据库
function shan(ids) {
    return new Promise((res, rej) => {
        mysqls.query(`DELETE FROM list WHERE (id='${ids}')`, (err, data) => {
            console.log(ids)
            if (err) {
                rej(err);
            } else {
                res(data);
                console.log(data)
            }
        })
    })
}


module.exports = {
    all,
    tian,
    shan
}




