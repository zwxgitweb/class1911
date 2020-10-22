npm init //初始化

npm install xxx //安装什么包 可以简写成 npm i xxx

npm uninstall xxx // 删除什么包 简写 npm un xxx

npm update xxx // 更新什么包

npm i // 安装所有依赖

npm updata 包名 // 更新本地依赖

npm cache clear --force // 清除缓存
 
### -save -dve 详解

       # npm install moduleName 命令

            安装模块到项目node_modules目录下。
            不会将模块依赖写入devDependencies或dependencies 节点。
            运行 npm install 初始化项目时不会下载模块。
            npm install -g moduleName 命令

            4. 安装模块到全局，不会在项目node_modules目录中保存模块包。
            5. 不会将模块依赖写入devDependencies或dependencies 节点。
            6. 运行 npm install 初始化项目时不会下载模块。

       # npm install -save moduleName 命令
            7. 安装模块到项目node_modules目录下。
            8. 会将模块依赖写入dependencies 节点。
            9. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
            10. 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。

       # npm install -save-dev moduleName 命令
            11. 安装模块到项目node_modules目录下。
            12. 会将模块依赖写入devDependencies 节点。
            13. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
            14. 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。

       ## 总结
                devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。npm install moduleName 命令

                安装模块到项目node_modules目录下。
                不会将模块依赖写入devDependencies或dependencies 节点。
                运行 npm install 初始化项目时不会下载模块。

               # npm install -g moduleName 命令
                    4. 安装模块到全局，不会在项目node_modules目录中保存模块包。
                    5. 不会将模块依赖写入devDependencies或dependencies 节点。
                    6. 运行 npm install 初始化项目时不会下载模块。

               # npm install -save moduleName 命令
                    7. 安装模块到项目node_modules目录下。
                    8. 会将模块依赖写入dependencies 节点。
                    9. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
                    10. 运行npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中。

               # npm install -save-dev moduleName 命令
                    11. 安装模块到项目node_modules目录下。
                    12. 会将模块依赖写入devDependencies 节点。
                    13. 运行 npm install 初始化项目时，会将模块下载到项目目录下。
                    14. 运行npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。

                总结
                devDependencies 节点下的模块是我们在开发时需要用的，比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用 -save-dev 的形式安装。像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用 -save 的形式安装。
