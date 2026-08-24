---
title: 安装 ChatGPT
description: 面向零基础用户的 ChatGPT 安装指南（桌面端含 Codex 功能）。不管你有没有编程经验，跟着一步步来就能装好。
---

# 安装 ChatGPT

欢迎！这一页帮你把 ChatGPT 装到电脑上。ChatGPT 桌面应用里自带 Codex（读作"扣 dex"，OpenAI 出的一个 **AI 编程工具**，你说话，它写代码），不用单独安装。

## 先帮你做个选择：用桌面应用还是命令行？

用 ChatGPT 有两种方式，**选一种就行**：

| 方式 | 适合谁 | 长什么样 |
| --- | --- | --- |
| **ChatGPT 桌面应用**（里面自带 Codex） | ✅ **绝大多数用户**，包括第一次接触编程的你 | 跟普通软件一样，有窗口、有按钮、可以鼠标点 |
| **Codex CLI**（命令行，Command Line Interface 的缩写） | 习惯在黑色窗口里敲命令的人，或者用 Linux / 远程服务器的人 | 在终端（那个黑底白字的窗口）里敲命令操作 |

::: tip 🎯 直接给你结论
**选 ChatGPT 桌面应用。** Codex 功能现在就在 ChatGPT 桌面应用里，不用单独装。除非你很清楚自己要用命令行（比如你是程序员，或者用 Linux），不然用桌面应用就够了。下面先讲桌面应用怎么装，命令行放在后面备用。
:::

## 方式一：安装 ChatGPT 桌面应用（推荐 ✅）

### 打开下载页面

用浏览器打开 ChatGPT 桌面应用的官方下载页面：

👉 [https://openai.com/chatgpt/download/](https://openai.com/chatgpt/download/)

打开后你会看到页面标题写着「Download ChatGPT for desktop」，上面有 macOS 和 Windows 两个下载入口。

**根据你的电脑系统，点对应的按钮：**

| 你的电脑 | 点哪个 |
| --- | --- |
| 🍎 Mac 电脑 | 点 **「macOS」** 下载按钮，会下载一个安装文件 |
| 🪟 Windows 电脑 | 点 **「Windows」** 下载按钮，会跳转到 Microsoft Store（微软应用商店），在商店里点 **「获取」** 或 **「安装」** |
| 🐧 Linux 电脑 | ChatGPT 桌面应用没有 Linux 版，直接看下方的 [命令行方式](#方式二安装-codex-cli备选) |

![ChatGPT 桌面应用下载页面](/images/screenshots/codex-client-download.png)

::: warning ⚠️ Windows 用户注意
ChatGPT 桌面应用要求 Windows 10 或更高版本。
- 如果你的电脑是 **Windows 10 或 Windows 11** → 没问题，继续。
- 如果是 **Windows 8** → 不能用桌面应用，看下方的 [命令行方式](#方式二安装-codex-cli备选)。
- 如果是 **Windows 7 或更早** → 需要先升级系统才能用。
:::

::: tip 💡 Microsoft Store 打不开或下载太慢？
别着急，先看下方的 [命令行方式](#方式二安装-codex-cli备选) 装 Codex CLI，一样能用。等商店恢复正常了再换回桌面应用。
:::

### 安装并打开 ChatGPT

下载完成后：
- **Mac**：会得到一个 `.dmg` 文件，双击打开，把 ChatGPT 图标拖进「应用程序」文件夹。
- **Windows**：Microsoft Store 会自动安装，装好后在开始菜单里能找到 ChatGPT。

安装完成后，**双击 ChatGPT 图标打开它**。第一次打开时，ChatGPT 会引导你登录 OpenAI 账号（或者创建新账号），按屏幕上的提示操作就行。

你会看到 ChatGPT 的主界面，这说明安装成功了 ✅。

### 在 ChatGPT 里进入 Codex，打开项目文件夹

在 ChatGPT 桌面应用里找到并进入 **Codex**（界面里通常有明显的 Codex 入口）。进入后，它会让你选择一个文件夹来工作。这个文件夹就是 Codex 帮你写代码的地方。

- **如果你有项目文件夹**：直接选你的项目文件夹。
- **如果你还没有**：在桌面上新建一个空文件夹（右键 → 新建文件夹 → 随便起个名字比如"我的项目"），然后在 Codex 里选它。

![在 ChatGPT 里打开项目文件夹](/images/screenshots/codex-client-open-project.png)

选好文件夹后，Codex 的主工作界面就会出现。

::: tip ✅ 检查点
到这一步，你只需要确认两件事：
1. ChatGPT 能正常打开，不是闪退或白屏。
2. 能进入 Codex，并选一个文件夹，看到 Codex 的工作界面。

**做到这两步就够了。** 接下来要注册并配置请求地址，ChatGPT 才能开始用，继续看下面的「下一步」。
:::

---

## 方式二：安装 Codex CLI（备选）

Codex CLI（命令行版本）是给习惯在终端（那个黑底白字的窗口）里敲命令的人准备的。下面这些情况才用得上它：

| 你的情况 | 需要 CLI 吗？ |
| --- | --- |
| 用 Linux 系统 | ✅ 需要，ChatGPT 桌面应用没有 Linux 版 |
| Mac / Windows，但桌面应用装不上 | ✅ 可以先用 CLI |
| 程序员，本来就天天用终端 | ✅ 可以用 CLI |
| 普通用户，桌面应用已经装好了 | ❌ 不需要，跳过这一整节 |

### 打开终端

先找到你电脑上的终端程序（那个用来敲命令的窗口）：

| 你的电脑 | 怎么打开终端 |
| --- | --- |
| 🍎 Mac | 按 `Command + 空格`，搜索 **「终端」** 或 **「Terminal」**，回车打开 |
| 🪟 Windows | 按 `Win 键`，搜索 **「PowerShell」**，回车打开 |

打开后你会看到一个黑底白字（或白底黑字）的窗口，里面有一行闪烁的光标，这就是终端。

### 运行安装命令

**把下面这行命令完整复制**（从 `curl` 开始到 `sh` 结束），粘贴到终端窗口里，按回车：

::: code-group

```bash [Mac]
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell [Windows]
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

:::

按回车后，屏幕上会跑一些文字，这是在自动下载和安装。**看到命令提示符重新出现（就是你又能输入东西了），说明安装完成。**

::: tip 💡 安装完成后
**关掉当前终端窗口，重新打开一个新的终端。** 这步很重要，不然系统可能找不到刚刚装好的 Codex CLI。
:::

### 验证装好了没

在新终端里输入下面这行，按回车：

```bash
codex --version
```

如果你看到类似 `1.0.0` 这样的版本号，说明装好了 ✅。

![Codex CLI 启动成功](/images/screenshots/codex-cli-start.png)

如果提示 `command not found`（找不到命令），说明没装上，回到上面重新来一遍。

### 补充：用 npm 安装（只有当你本来就用 npm 才选这个）

如果你电脑上已经装了 Node.js 和 npm（前端开发用的工具），也可以用 npm 安装：

```bash
npm install -g @openai/codex
```

如果你不知道 npm 是什么，这一段直接跳过，用上面的官方脚本安装就行。

::: tip 🔗 需要装 Node.js？
如果你确实需要用 npm 方式安装 Codex CLI，但电脑上还没有 Node.js，去看 [Node.js 环境准备（CLI 用户可选）](/guide/nodejs-git)。
:::

---

## 装好了，接下来做什么？

恭喜，ChatGPT 已经装好了 🎉 现在按顺序继续：

**👉 下一步：[注册账号](/guide/register)**——打开你的中转站网址注册一个账号，后面配置要用。

完整流程：
1. ✅ 安装 ChatGPT（你在这里）
2. ⬜ [注册账号](/guide/register)
3. ⬜ [给账号充值](/guide/recharge)
4. ⬜ [创建 API Key](/guide/api-key)
5. ⬜ [配置 ChatGPT](/guide/connect) —— 发一条测试消息，ChatGPT 能回复你就全部完成了

> 如果你用的是 Linux 系统或者 npm 方式安装的 Codex CLI，在继续之前先看一眼 [Node.js 环境准备](/guide/nodejs-git)，确认环境没问题。
