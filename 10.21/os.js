// let os = require('os'); // 获取机器信息的模块

// console.log(os.cpus()) // 获取当前电脑的CPU信息

// console.log(os.totalmem()) // 获取当前电脑的内存大小信息（字节）


// let path = require('path'); // 获取路径的模块

// require() 是一个方法
    // 它的作用就是用来加载模块的
    // 在node中 模块有三种
        // 1 具体名称的核心模块 ：fs,os,http,url,path.....
        // 2 用户自己编写的js文件模块：相对路径必须加 ./ 上一级 ../ 可以省略后缀名

    // 在node中没有全局作用域，只有模块作用域:外部访问不到内部，内部也访问不到外部，默认是封闭的
    // 既然是模块作用域，那如何让模块与模块之间进行通信？
        // 有时候我们加载模块不是简简单单的执行里面的代码，更重要的是为了使用里面的某一个成员

// var foo = 'osososo'

// console.log('开始执行')

// require('./a.js')

// console.log('执行a.js结束')

// console.log('foo的值是'+ foo)

//  require('./a') 
//  require 有两个方法；
//  1 加载 ： 加载模块并执行里面的代码
//  2 导出 ： 拿到被加载模块导出的接口对象
    // 每一个模块中都提供了一个对象 exports
    // exports 默认是一个空对象
    // 你要做的就是把所有需要被外部访问的成员挂载到exports这个对象上
        var ret = require('./a')
        // console.log(ret) // 空对象
        // console.log(ret) // {foo:bbb}
        console.log(ret.add(10,40)) // 50
// console.log(foo)