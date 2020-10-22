### node 基本模块

## http 模块

    + createServer
        http.createServer()启动服务器
    + listen
        端口号

## path 模块

    # path.resolve
        path.resolve(__dirname,'文件名') //找出文件的绝对路径

## fs 模块

    + # fs.writeFile(filename, data, [options], [callback(err)])
        接收参数：
            filename (String) 文件名称

            data (String | Buffer) 将要写入的内容，可以使字符串 或 buffer 数据。

            options (Object) option 数组对象，包含：

            · encoding (string) 可选值，默认 ‘utf8′，当 data 使 buffer 时，该值应该为 ignored。

            · mode (Number) 文件读写权限，默认值 438

            · flag (String) 默认值 ‘w'

            callback {Function} 回调，传递一个异常参数 err。



    + # fs.access() 判断文件和目录是否存在；
            //                      文件是否存在             文件是否可写
        fs.access('./a/a.js', fs.constants.F_OK | fs.constants.W_OK, (err, data) => {}


    + # fs.readFile(filename,[encoding],[callback(err,data)]) 读取TXT文件内容

        filename（必选），表示要读取的文件名。

        encoding（可选），表示文件的字符编码。

        callback 是回调函数，用于接收文件的内容。




    ### 常用方法#
        操作	异步方法                        	                         同步方法
        打开文件	fs.open(path, flags[, mode], callback)      	    fs.openSync(path, flags[, mode])
        文件信息	fs.stat(path[, options], callback)          	    fs.statSync(path[, options])
        新建文件	fs.appendFile(path, data[, options], callback)	    fs.appendFileSync(path, data[, options])
        写入文件	fs.writeFile(file, data[, options], callback)	    fs.writeFileSync(file, data[, options])
        读取文件	fs.read()
        读取文件	fs.readFile(path[, options], callback)	            fs.readFileSync(path[, options])
        重命名文件	fs.rename(oldPath, newPath, callback)	             fs.renameSync(oldPath, newPath)
        关闭文件	fs.close(fd, callback)	                            fs.closeSync(fd)
        截取文件	fs.ftruncate(fd[, len], callback)	                fs.ftruncateSync(fd[, len])
        删除文件	fs.unlink(path, callback)	                        fs.unlinkSync(path)
        文件存在	fs.stat() / fs.access()	                            fs.existsSync(path)
        监听文件	fs.watchFile(filename[, options], listener)
        停止监听	fs.unwatchFile(filename[, listener])
        打开大文件	fs.createReadStream(path[, options])
        写入大文件	fs.createWriteStream(path[, options])
        创建目录	fs.mkdir(path[, options], callback)	                fs.mkdirSync(path[, options])
        读取目录	fs.readdir(path[, options], callback)	            fs.readdirSync(path[, options])
        删除目录	fs.rmdir(path, callback)	                        fs.rmdirSync(path)
