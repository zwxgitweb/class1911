const Mock = require('mockjs')
const fs = require('fs')
let data = Mock.mock({
    "list|4": [
        {
            "id": "@id",
            "name": "@cname(2)",
            "img":"@img",
            "children": [
                {
                    "id": "@id",
                    "name": "@cname(10)",
                }
            ]
        }
    ]
})
fs.writeFileSync('./data.json', JSON.stringify(data))