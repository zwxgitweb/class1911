const Mock = require('mockjs');
const fs = require('fs');
let data = Mock.mock({
    'list|12':[
        {
            'id|+1':1,
            'tab':'@ctitle(2)',
            'content|2':[
                {
                    'titel':'@ctitle(4)',
                    'shops|9':[
                        {
                            'img':'@img(20x20,@color)',
                            'info':'@ctitle(2,4)'
                        }
                    ]
                }
            ]
        }
    ]
})

fs.writeFileSync('./data.json',JSON.stringify(data))