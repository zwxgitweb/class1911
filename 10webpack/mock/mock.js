const Mock = require('mockjs');
const fs =require('fs');
let data=Mock.mock({
    'list|4':[
        {
            'text':"@ctitle",
            "name":"@cname",
            "id":"@id"
        }
    ],
    "img|4":[
        {
            'img':"@image(200x100)"
        }
    ]
})

fs.writeFileSync('./data.json',JSON.stringify(data));