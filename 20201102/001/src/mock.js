const Mock = require('mockjs');

const fs = require('fs');

let data = Mock.mock({
    'list|4':[
        {
            'title':'@ctitle(4)',
            'img':'@ctitle(4)'
        }
    ]
})


console.log(data)

fs.writeFileSync('./data.json',JSON.stringify(data))

