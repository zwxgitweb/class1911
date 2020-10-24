const express = require('express');
const fs = require('fs');
const app = express();
const app2 = express();

app2.get('/', (req, res) => {
    fs.createReadStream('./index.html').pipe(res);
})
//挂载
app.use('/home', app2)




app.listen(5858, () => {
    console.log('已连接服务器5858......')
})