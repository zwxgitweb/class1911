const mysql = require('mysql')
let db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'userlist'
})
db.connect(() => {
    console.log('数据连接成功')
})
function login(params) {
    return new Promise((resolve, reject) => {
        let sql = `select * from list where user LIKE "${params.username}" and pad LIKE "${params.password}"`
        db.query(sql, (err, rows) => {
            if (err) {
                reject({
                    code: 0,
                    msg: err
                })
            } else {
                resolve({
                    code: 1,
                    msg: rows
                })
            }
        })
    })
}
function rigerText(username) {
    let sql = `select * from list where user = "${username}"`
    return new Promise((resolve, reject) => {
        db.query(sql, (err, rows) => {
            if (err) {
                reject({
                    code: 0,
                    msg: err
                })
            } else {
                resolve({
                    code: 1,
                    msg: rows
                })
            }
        })
    })
}
function register(username,password) {
    return new Promise((resolve, reject) => {
        let sql = `insert into list(user,pad) values("${username}","${password}")`
        db.query(sql, (err, rows) => {
            if (err) {
                reject({
                    code: 0,
                    msg: err
                })
            } else {
                resolve({
                    code: 1,
                    msg: rows
                })
            }
        })
    })
}
module.exports = {
    login,
    rigerText,
    register
}