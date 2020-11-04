const zongconfig=require('./webpack.zhong');
const aconfig=require('./webpack.a');
const bconfig=require('./webpack.b');
const merge=require('webpack-merge');

let config='';

config= process.NODE_ENV ==="development" ? merge(zongconfig,bconfig):merge(zongconfig,aconfig)

module.exports=config;