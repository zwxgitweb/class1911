const Mock = require('mockjs');
const fs = require('fs')
let data = Mock.mock({
    'box|10': [
        {
            'tab': '@ctitle(2)',
            'con': [
                {
                    'tab':'@ctitle(4)',
                    'bot|9':[
                        {
                            'img':'@image(20x20)',
                            'name':'@ctitle(2,4)'
                        }
                    ]
                }
            ]
        }
    ]
})
console.log(JSON.stringify(data))
fs.writeFileSync('./data.json',JSON.stringify(data));
