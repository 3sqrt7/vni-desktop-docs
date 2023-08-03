# 守则

为了使小组件生态健康地发展，请你在开发时务必遵守以下规则。

## 法律与道德

- 不编写反对宪法所确定的基本原则的代码

- 不编写危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的代码

- 不编写损害国家荣誉和利益的代码

- 不编写散布谣言，扰乱社会秩序，破坏社会稳定的代码

- 不编写散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的信息的代码

- 不编写对用户的计算机有害的代码

- 不收集不必要的用户信息

- 不编写违反法律、行政法规的代码

- 不编写违反社会道德的代码

## 上游守则

小组件基于 Electron 开发，所以也请你务必遵守 Electron 的一些规则。

 - 性能：[https://www.electronjs.org/docs/latest/tutorial/performance](https://www.electronjs.org/docs/latest/tutorial/performance)

 - 安全性：[https://www.electronjs.org/docs/latest/tutorial/security](https://www.electronjs.org/docs/latest/tutorial/security)

## 不是浏览器！

虽然小组件是基于 Electron 开发的，其内含一个 Chromium 渲染器。但请记住：小组件不是浏览器！

因此，你务必不要在首页直接放一个填充整个窗口的 iframe 就完事，这既不道德也不安全！

优秀的例子是，将全部界面存储在本地，必要时通过 fetch 与服务器通信，同时将所有用户数据通过 `localStorage` 存储在本地。
