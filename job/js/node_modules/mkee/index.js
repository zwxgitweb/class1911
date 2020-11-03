var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

module.exports = function makeEventEmitter(ctr){
  inherits(ctr, EventEmitter)
}
