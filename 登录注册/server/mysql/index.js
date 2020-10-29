const mysql = require('mysql');
const {
    data
} = require('../public/index.js')
let mysqls = mysql.createConnection(data);

mysqls.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('succeed is mysql...');
    }
})

//查找
function find(name, pwd) {
    return new Promise((res, rej) => {
        mysqls.query(`SELECT * FROM lists WHERE names LIKE '${name}'`, (err, data) => {
            if (err) {
                rej(err)
            } else {
                if (data && data.length) {
                    if (data[0].pasd == pwd) {
                        data = {
                            code: 1,
                            msg: '登录成功'
                        }
                        res(data)
                    } else {
                        data = {
                            code: 0,
                            msg: '密码错误',
                        }
                        res(data)
                    }
                } else {
                    data = {
                        code: 2,
                        msg: '没有该用户请注册',
                    }
                    res(data)
                }
            }
        })
    })
}

//添加
function add(name, pwd) {
    return new Promise((res, rej) => {
        mysqls.query(`INSERT INTO lists (names, pasd) VALUES ('${name}', '${pwd}')`, (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
}





module.exports = {
    find,
    add
}