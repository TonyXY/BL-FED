[//]: # (2017-07-19  other)
## mac使用的一些经验

### 1.截图
>* Command＋shift＋3:全屏截图，保存截图到桌面
>* Command＋shift＋4:鼠标选定区域截图，保存截图到桌面
>* Command+shift+4+空格:截图某个特定的活动窗口

### 2.键盘对应符号图
![](../../images/keyboard.png)

### 3.打开/关闭整个系统的隐藏文件
``` bash
defaults write com.apple.finder AppleShowAllFiles Yes && killall Finder
defaults write com.apple.finder AppleShowAllFiles No && killall Finder
```
