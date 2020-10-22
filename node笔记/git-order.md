### git   命令

- 查看或修改user/email
- $ git config --global user.name "Your Name"
- $ git config --global user.email "email@example.com"
- 查看git初始配置项：git config --list

#### 提交远程仓库步骤：

- git init   初始化
- git add .  添加文件到缓存区
- git commit -m "note" 提交文件到缓存区并添 加注释
- git remote add origin 网址 添加提交url
- git push origin master 提交到远程仓库

#### 克隆远程仓库

- git clone HTTPS/ssh  克隆
- git pull  更新覆盖本地版本
- git fetch 更新
- git fetch origin url  从远程拉取分支

#### 生成密钥命令：
- ssh-keygen -t rsa -C 'haiyan.xu.vip@gmail. com”
按3个回车，密码为空

#### Github + Pages搭建个人网站

1. 在git上新建一个仓库(仓库名必须是用户名.github.io)
2. 在该仓库下创建index.html即可
3. 在地址栏输入仓库名即可访问

#### 分支的创建、查看、删除

- git checkout -b dev  创建并切换 dev分支（是以下两步的合并）
- git branch dev  创建开发环境分支
- git branch issue 创建修改bug分支
- git branch feature  创建修改功能分支

- git checkout dev  迁出、切换分支
 
git branch  查看所有分支
git branch -d dev  删除分支
git branch -D dev  强制删除分支
git log  查看提交log 日志
git status  查看当前状态
 
git merge  dev  合并分支
合并分支时会出现冲突，
以<<<<<开始
以>>>>>>>结束
冲突以= = = = = = = 分隔
解决冲突：直接删除，保留需要的即可

git merge --no-ff      保留所有的节点(有意义的)
git merge --squash  合并时将所有的节点(无意义的)合并为一个
git reset  撤销修改
git config  配置
