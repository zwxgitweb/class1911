const Mock = require("mockjs");
const fs = require('fs')
let data = Mock.mock({
    "list|5": [
        {
            "id": "@id",
            "name": "@cname(2)",
            "children|2": [
                {
                    "id": "@id",
                    "tit": "@ctitle(4)",
                    "child|9": [
                        {
                            "id": "@id",
                            "img": "@img(20x20)",
                            "name": "@cname(2,4)",
                        }
                    ]
                }
            ]
        }
    ]
})

fs.writeFileSync('./data.json',JSON.stringify(data))