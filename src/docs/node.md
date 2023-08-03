# Node 集成

维念桌面已经为所有实例集成了 Node.JS 环境。你可以在小组件中使用 Node 模块和 Node 常量。

## require 函数

### 常用模块

以 child_process 模块为例，你可以这么使用它：

```javascript
const Process = require("child_process");
Process.exec("start cmd");
```

### Electron API

以 shell 对象为例，你可以这么使用它：

```javascript
const { shell } = require("electron");
shell.openExternal("https://desktop.vnisoft.top/");
```

更多内容请访问 [https://www.electronjs.org/docs/latest/api/shell](https://www.electronjs.org/docs/latest/api/shell)

## Node 常量

- **(String)** `__dirname` 当前目录的路径
- **(String)** `__filename` 当前文件的路径
