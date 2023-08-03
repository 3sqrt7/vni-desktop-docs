# 认识小组件

在开始编写小组件之前，你需要先了解有关小组件的各种概念。

## 小组件

- 小组件是一系列资源文件的统称。
- 小组件可以是一个文件夹，也可以是一个 vdwg 文件。
- 小组件可以被安装和卸载。
- 小组件不可以拥有用户数据。

## widget.json

小组件的资源文件里其中一定包含 widget.json，它是小组件的配置文件，有以下属性：

- **(Number)** `v` 配置文件的版本
- **(String)** `name` 小组件的名称
- **(String)** `author` 小组件的作者
- **(String)** `version` 小组件的版本
- **(Number)** `versionCode` 小组件的版本
- **(String)** `intro` 小组件的简介
- **(String)** `index` 小组件的索引文件
- **(String)** `icon` 小组件的图标文件
- **(Number)** `defaultWidth` 实例的默认宽度
- **(Number)** `defaultHeight` 实例的默认高度
- **(Number)** `minWidth` 实例的最小宽度
- **(Number)** `minHeight` 实例的最小高度
- **(Number)** `maxWidth` 实例的最大宽度
- **(Number)** `maxHeight` 实例的最大高度

## 实例

- 任何一个被放置到桌面的小组件都是一个实例。
- 实例有大小和位置属性，实例的大小和位置将被自动对齐。
- 实例可以被创建和删除。
- 一个小组件可以有多个实例，也可以没有实例。
- 当一个小组件被卸载时，它的所有实例都将被删除。
- 实例可以拥有用户数据。
- 一个实例就像是一个独立的沙盒，实例之间不共享 Cookies 和 localStorage 等数据。
- 从底层来说，一个实例是一个进程，也是一个窗口，包含一个 Chromium 渲染器。
