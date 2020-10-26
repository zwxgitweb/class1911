const Mock = require('mockjs');
const fs = require('fs')

let shuju = Mock.mock({
    'date|5': [{
        'name_l': '@ctitle(2)',
        'ttenmi|2': [{
            'name_r_s': '@ctitle(2)',
            'mxnwin|9': [{
                'img': '@img(20x20)',
                'name_r_x': '@ctitle(2)',
            }]
        }]
    }]
})

fs.writeFileSync('./date.json', JSON.stringify(shuju))