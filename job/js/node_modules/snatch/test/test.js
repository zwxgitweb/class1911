var test = require('tape')
var snatch = require('../')
var fs = require('fs')

//usually a symlink to /usr/share/dict/words
var filename = __dirname + '/words'
try{
  var stat = fs.statSync(filename)
}catch(e){
  console.error('Need a `words` file in the test folder')
  console.error('Try ln -s /usr/share/dict/words test/')
  throw e
}

test('dict words buf test', function(t){
  var stream = fs.createReadStream(filename)

  snatch(stream, function(err, contents){
    t.error(err, 'should not error')
    t.ok(Buffer.isBuffer(contents), 'result should be a buffer')
    t.equal(contents.length, stat.size, 'should be same size as stat')

    t.end()
  })
})

test('dict words str test', function(t){
  var stream = fs.createReadStream(filename, {encoding: 'utf8'})

  stream.setEncoding('ascii')
  
  snatch(stream, function(err, contents){
    t.error(err, 'should not error')
    t.ok(typeof contents, 'string', 'result should be a string')
    t.equal(Buffer.byteLength(contents), stat.size, 'should be same size as stat')
    t.equal(new Buffer(contents).length, stat.size, 'buffer should become same size as stat')

    t.end()
  })
})
