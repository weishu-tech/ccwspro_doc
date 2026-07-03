---
title: Codex 下载安装
description: 面向新用户的 Codex 客户端和 Codex CLI 安装指南，帮助先确认工具可用，再继续接入 CCWS。
---

# Codex 下载安装

新用户建议先完成 Codex 下载安装，确认工具能打开，再继续完成平台注册、账号充值和 API Key 配置。

Codex 常见有两种使用方式：客户端和命令行。普通用户建议优先使用客户端，界面更直观，也方便查看项目、会话历史和代码变更；命令行适合已经熟悉终端、Linux、远程服务器或需要脚本化运行的用户。

## 客户端方式（推荐）

### 打开官方下载页面

打开 [Codex 官方下载页面](https://openai.com/zh-Hans-CN/codex/get-started/)，按自己的系统下载安装包。

| 系统 | 说明 |
| --- | --- |
| macOS | 点击页面上的“下载 macOS 版” |
| Windows | 在官方页面选择 Windows 入口，按提示跳转到 Microsoft Store 下载 |
| Linux | 暂无桌面客户端，建议使用命令行方式 |

::: tip 下载不顺时
如果 Microsoft Store 暂时无法下载，可以先使用下方的命令行方式安装 Codex CLI，先把工具用起来。等客户端可以正常下载后，再切回客户端方式。
:::

![Codex 官方下载页面](/images/screenshots/codex-client-download.png)

### 安装并打开 Codex

下载完成后，按系统安装器提示安装 Codex。安装完成后打开 Codex 客户端，首次启动时按页面提示完成登录或授权。

### 打开项目文件夹

在 Codex 客户端中选择一个本地项目文件夹。如果你还没有项目，可以先新建一个空文件夹用于测试。

![Codex 客户端选择项目文件夹](/images/screenshots/codex-client-open-project.png)

::: tip 提示
这一步只需要确认 Codex 客户端能正常打开和选择文件夹。后续接入 CCWS 请求地址和 API Key，需要继续完成平台注册、账号充值与 API Key 配置。
:::

## 命令行方式（备选）

命令行方式适合熟悉终端的用户，也适合 Linux、远程服务器或客户端暂时无法安装的场景。

### 安装 Codex CLI

macOS / Linux 可以使用官方安装脚本：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Windows 可以在 PowerShell 中执行：

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

也可以使用包管理工具安装：

::: code-group

```bash [npm]
npm install -g @openai/codex
```

```bash [Homebrew]
brew install --cask codex
```

:::

安装完成后，关闭当前终端窗口，重新打开终端。

### 更新 Codex CLI

如果已经安装过 Codex CLI，建议先更新到当前可用版本。按你当时的安装方式选择一种即可。

::: code-group

```bash [官方脚本 macOS / Linux]
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell [官方脚本 Windows]
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

```bash [npm]
npm install -g @openai/codex@latest
```

```bash [Homebrew]
brew update
brew upgrade --cask codex
```

:::

更新完成后，关闭当前终端窗口，重新打开终端。

### 验证命令是否可用

执行：

```bash
codex --version
```

如果能看到版本号，说明 Codex CLI 已安装成功。

![Codex CLI 启动成功](/images/screenshots/codex-cli-start.png)

## 下一步

完成 Codex 下载安装后，继续按顺序完成：

- [平台注册：注册 / 登录](/guide/register)
- [账号充值：充值 / 续费](/guide/recharge)
- [API Key：请求地址 / API Key](/guide/api-key)
- [API Key：Codex 配置](/guide/codex)

如果你使用 `npm` 方式安装或更新 Codex CLI，再补充本章节下的 [Node.js 环境（CLI 可选）](/guide/nodejs-git)。
