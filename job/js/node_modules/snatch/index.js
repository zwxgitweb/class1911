module.exports = snatch

var T_BUFFER = 1
var T_STRING = 2

var buffers = typeof Buffer != 'undefined'

function snatch(stream, cb){
  var type
  var data
  var snatcher
  var length = 0

  //assume all data is buffer or string & won't change type 
  stream.on('data', function(d){
    if(!type){
      if(buffers && Buffer.isBuffer(d)){
        type = T_BUFFER
        snatcher = tobuf
        data = []
      } else if(typeof d == 'string') {
        type = T_STRING
        snatcher = tostr
        data = ''
      } else {
        cb(new Error('Unknown type'))
      }
    }
    snatcher(d)
  })

  stream.on('error', function(err){
    cb(err)
  })

  stream.on('end', function(d){
    if(d) snatcher(d)
    if(type == T_BUFFER){
      var buf = new Buffer(length)
      var offset = 0
      data.forEach(function(d){
        d.copy(buf, offset)
        offset += d.length
      })
      cb(null, buf)
    } else {
      cb(null, data)
    }
  })

  function tobuf(d){
    data.push(d)
    length += d.length
  }

  function tostr(d){
    data += d
  }
}
