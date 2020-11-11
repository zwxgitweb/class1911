const baseConfig = require('./webpack.base.config');//公用
const devConfig = require('./webpack.dev');//线下
const proConfig = require('./webpack.pro');//线上
const merge = require('webpack-merge');//合并
let config = '';
config = process.env.NODE_ENV === 'development' ? merge(baseConfig, devConfig)
    : merge(baseConfig, proConfig);//拼接 如果是本地开发拼接开发  不是拼接线上
module.exports=config;//抛出