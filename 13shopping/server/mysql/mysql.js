const { reject } = require('async');
const mysql = require('mysql');
const { resolve } = require('path');
let connection = mysql.createConnection({
    port: 3306,
    password: 'root',
    user: 'root',
    database: 'userlist',
    host: 'localhost'
})
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('connecion is success')
    }
})
// 渲染页面
function check() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM shopping`, (err, reslut) => {
            if (err) {
                reject(err)
            } else {
                resolve(reslut)
            }
        })
    })
}

// 修改数量
function amend(id, num) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE shopping SET num = '${num}' WHERE id = '${id}'`, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
function isChecked(id, ischecked) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE shopping SET ischecked = '${ischecked}' WHERE id = '${id}'`, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
// 删除

function delShop(id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM shopping WHERE id="${id}"`, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = {
    check,
    amend,
    delShop,
    isChecked
}