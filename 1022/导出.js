const http = require('http')
const exp = require('./数组去重')

http.createServer((req,res) => {
    let Arr = [2,5,2,5,2,5,1,4,1,4,6,3,6,3,3]
    console.log(exp.deWeight(Arr))
    res.end('./')
}).listen(3000)