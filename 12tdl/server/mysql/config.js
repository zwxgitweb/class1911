const mySql = require('mysql');//下载插件

// 链接数据库
let connection = mySql.createConnection({
    port: 3306,
    password: 'root',
    user: 'root',
    database: 'userlist',
    host: 'localhost'
})
// 检查链接是否成功
connection.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log('connection is success')
    }
})

// 添加1
function addVal(val) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO things (value) VALUES ("${val}")`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                findList().then(res => {
                    resolve({
                        code: 1,
                        msg: '添加成功',
                        data: res
                    })
                })
            }
        }))
    })
}

// 查找数据库所有代办事项
function findList() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM things`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                resolve(res);
            }
        }))
    })
}

// 查找单独1
function findId(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM things WHERE id LIKE '${id}'`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                // 添加2
                addFinished(res[0].value).then(r => {
                    resolve(r)
                })
                // 删除
                delTodList(id)
            }
        }))
    })
}


// 添加2表
function addFinished(val) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO finished (value) VALUES ("${val}")`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                findFinished().then(res => {
                    resolve({
                        code: 1,
                        msg: '添加成功',
                        data: res
                    })
                })
            }
        }))
    })
}

// 2查找数据库所有代办事项
function findFinished() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM finished`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                resolve(res);
            }
        }))
    })
}

// 删除当前
function delTodList(id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM things WHERE id='${id}'`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                resolve(res);
            }
        }))
    })
}

// 删除当前选中的完成事项
function delFinishList(id) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM finished WHERE id='${id}'`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                resolve(res);
            }
        }))
        connection.query(`DELETE FROM things WHERE id='${id}'`, ((e, res) => {
            if (e) {
                reject(e);
            } else {
                resolve(res);
            }
        }))
    })
}

module.exports = {
    addVal,
    findList,
    findId,
    findFinished,
    delFinishList,
    delTodList,
}
