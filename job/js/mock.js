
let Mock = require('mockjs');

let fs = require('fs');

let data = Mock.mock({
    'list|10':[
        {
            'title':'@ctitle(2)',
            'content|2':[
                {
                  'title':'@ctitle(4)',
                  'num|9':[
                      {
                          'img':'@img(10x10)',
                          'title':'@ctitle(2,4)'
                      }
                  ]  
                }

            ]
        }
    ]
})


//  把模拟数据创建到一个新的文件
fs.writeFileSync('./data.json',JSON.stringify(data)) 
