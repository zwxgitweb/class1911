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
        mysqls.query('SELECT * FROM zhangdan', (err, data) => {
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
    nam=name.split(',')
    console.log(nam)
    return new Promise((res, rej) => {
        mysqls.query(`INSERT INTO zhangdan (leixing, jiage, shijian, beizhu) VALUES ('${nam[0]}', '${nam[1]}', '${nam[2]}', '${nam[3]}')`, (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        })
    })
}


module.exports = {
    all,
    tian
}




