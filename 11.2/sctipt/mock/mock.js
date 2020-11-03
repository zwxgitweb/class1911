const Mock = require('mockjs');
const fs = require('fs');

let data = Mock.mock({
    'luinsd|5': [{
        'imgs': '@img(375x150)',
        'id': '@id'
    }],
    'listac|5': [{
        "namejn": '@ctitle(2,4)',
        'dcbdu': '@ctitle(4)',
        'id': '@id'
    }]
})
fs.writeFileSync('./data.json', JSON.stringify(data))
