const Mock = require('mockjs');
const fs = require('fs');

let data = Mock.mock({
	"list|8": [
		{
			"title": "@ctitle",
			"name": "@cname",
			"id": "@id"
		}
	]
});

fs.writeFileSync('./data.json', JSON.stringify(data));
