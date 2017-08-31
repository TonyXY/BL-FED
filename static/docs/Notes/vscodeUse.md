[//]: # (2017-07-27  other)
## vsCode使用的一些经验

### 1.常用快捷键
| 快捷键 | 描述 |
| ----- |------|
| ⌘/  | 添加或取消单行注释 |
| ⇧⌥A | 添加或取消多行注释 |
| ⌃⌥B | 格式化 |
| ⌥/Alt+Click | 插入光标 |
| ⌥⌘↑ | 在上一行插入光标 |
| ⌥⌘↓ | 在下一行插入光标 |
| ⌘F | 查找 |
| ⌥⌘F | 替换 |
| ⌃` | 显示终端 |
| ⌃⇧` | 创建新终端 |
| ⌘W | 关闭 |
| ⇧⌘P | 命令面板 |
| ⌃⇧F | 转换成大写 |
| ⌃⇧L | 转换成小写 |
| ⌥B | 在默认浏览器中打开<small>[需安装open-in-browser插件]</small>|
| ⌃⌥I | 文件添加注释<small>[需安装vscode-fileheader插件]</small>|
| ⌃C | Can I Use<small>[需安装Can I Use插件]</small>|

### 2.常用插件
| 插件名称 | 描述 |
| ----- |------|
| Beautify  | 代码美化 |
| Can I Use | Can I Use |
| One Dark Pro | 主题 |
| open in browser | 在浏览器中打开 |
| Vetur | 支持vue语法 |
| vscode-fileheader | 文件添加注释 |
| vscode-icons | 文件图标插件 |

### 3.添加切换大小写功能快捷键
``` json
//自定义快捷键配置中 keybindings.json 增加如下代码即可
{
    "key": "ctrl+shift+u",
    "command": "editor.action.transformToUppercase",
    "when": "editorTextFocus"
},
{
    "key": "ctrl+shift+l",
    "command": "editor.action.transformToLowercase",
    "when": "editorTextFocus"
}
```