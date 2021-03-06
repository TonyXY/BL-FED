[//]: # (2017-07-19  other)
## mac使用的一些经验

### 1.截图
>* __Command＋shift＋3__:全屏截图，保存截图到桌面
>* __Command＋shift＋4__:鼠标选定区域截图，保存截图到桌面
>* __Command+shift+4+空格__:截图某个特定的活动窗口

### 2.键盘对应符号图
![](../../docs/images/keyboard.png)

### 3.打开/关闭整个系统的隐藏文件
``` bash
defaults write com.apple.finder AppleShowAllFiles Yes && killall Finder
defaults write com.apple.finder AppleShowAllFiles No && killall Finder
```

### 4.创建txt文件
>* 在launchpad中找到__其他__>>__文本编辑__>>__新建__>>__偏好设置__>>格式修改为__纯文本__

### 5.修改物理地址
``` bash
//1.首先，打开“终端“，运行这个命令生成一个新的MAC网卡地址：
openssl rand -hex 6 | sed 's/\(..\)/\1:/g; s/.$//'
//2.输入修改mac地址的命令：
sudo ifconfig en0 ether xx:xx:xx:xx:xx:xx
```

### 6.svn使用
``` bash
#1.先在/User/apple目录下新建一个svn目录：
svnadmin create /Users/apple/svn/mycode

#2.配置svn的用户权限
#2.1 打开svnserve，将下列配置项前面的#和空格都去掉
#2.2 打开passwd，在[users]下面添加帐号和密码
#2.3 打开authz，配置用户组和权限

#3.启动svn服务器:
svnserve -d -r /Users/apple/svn

#4.关闭svn服务器:打开实用工具里面的“活动监视器”,找到svnserve，退出

#5.使用svn客户端功能
#5.1 从本地导入代码到服务器(第一次初始化导入):
svn import /Users/apple/Documents/eclipse_workspace/weibo svn://localhost/mycode/weibo --username=mj --password=123 -m "初始化导入"
#5.2 从服务器端下载代码到客户端本地:
svn checkout svn://localhost/mycode --username=mj --password=123 /Users/apple/Documents/code
```