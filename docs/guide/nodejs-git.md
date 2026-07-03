---
title: Node.js 环境（CLI 可选）
description: 为使用 npm 安装或更新 Codex CLI 的用户准备 Node.js、npm 和 Git 环境检查步骤。
---

# Node.js 环境（CLI 可选）

本页属于 Codex安装章节，只给使用 Codex CLI 的用户作为补充说明。如果你安装的是 Codex App，通常不需要先安装 Node.js，可以直接继续完成 [平台注册](/guide/register)、[账号充值](/guide/recharge) 和 [API Key](/guide/api-key)。

Codex CLI 本身可以通过官方脚本安装，不一定需要你提前准备 Node.js。只有在下面这些情况里，才建议看本页：

| 场景 | 是否需要 Node.js |
| --- | --- |
| 使用 Codex App | 不需要 |
| 使用官方脚本安装 Codex CLI | 通常不需要提前安装 |
| 使用 `npm install -g @openai/codex` 安装 Codex CLI | 需要 |
| 使用 `npm install -g @openai/codex@latest` 更新 Codex CLI | 需要 |
| 后续需要在项目里运行 npm、pnpm、yarn 等前端命令 | 需要 |

::: tip 关于 Git
Git 不是 Codex CLI 的必装前置。Codex CLI 可以在普通文件夹里启动。只有当你要处理 Git 仓库、查看提交历史、创建提交或推送代码时，再按需安装 Git 即可。
:::

## 安装前先确认

先打开终端执行：

```bash
node -v
npm -v
```

如果两条命令都能看到版本号，说明 Node.js 和 npm 已经可用，可以跳过安装步骤。

如果提示 `command not found`、`不是内部或外部命令`，或者完全没有版本号，再按下面步骤安装。

## macOS 安装

### 方式一：使用官方安装包

普通用户推荐使用官方安装包：

1. 打开 [nodejs.org](https://nodejs.org/)。
2. 下载 LTS 版本安装包。
3. 双击安装包，按提示完成安装。
4. 安装完成后，关闭当前终端窗口，再重新打开一个终端。

::: tip 提示
LTS 是长期维护版本，更适合日常使用。不要为了追新安装实验版本，除非你明确知道自己需要它。
:::

### 方式二：使用 Homebrew

如果你的电脑已经安装 Homebrew，也可以在终端执行：

```bash
brew install node
```

安装完成后，关闭当前终端窗口，再重新打开一个终端。

## Windows 安装

### 方式一：使用官方安装包

1. 打开 [nodejs.org](https://nodejs.org/)。
2. 下载 LTS 版本安装包。
3. 双击安装包，按默认选项安装。
4. 安装完成后，重新打开 PowerShell、命令提示符或 Windows Terminal。

### 方式二：使用 winget

如果你的系统支持 winget，可以在 PowerShell 中执行：

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

安装完成后，关闭当前终端窗口，再重新打开一个终端。

## 验证安装结果

重新打开终端后，执行：

```bash
node -v
npm -v
```

如果能看到版本号，说明 Node.js 和 npm 已经安装成功。

还可以检查命令路径：

::: code-group

```bash [macOS]
which node
which npm
```

```powershell [Windows]
where node
where npm
```

:::

这些命令会显示工具安装在电脑上的具体位置。只要能显示路径，通常就说明系统已经能找到它们。

## 用 npm 安装或更新 Codex CLI

如果你选择 npm 方式安装 Codex CLI，可以执行：

```bash
npm install -g @openai/codex
```

如果你已经用 npm 安装过 Codex CLI，可以执行：

```bash
npm install -g @openai/codex@latest
```

安装或更新完成后，重新打开终端，执行：

```bash
codex --version
```

如果能看到版本号，说明 Codex CLI 已经可以使用。

## 常见问题

### node 或 npm 命令找不到

通常是安装后终端没有重新加载环境变量。先关闭所有终端窗口，再重新打开终端执行验证命令。

如果还是找不到：

- 确认安装包已经完整安装成功。
- Windows 用户重新打开 PowerShell、命令提示符或 Windows Terminal。
- macOS 用户如果使用 Homebrew，确认 `brew doctor` 没有明显错误提示。

### npm 安装 Codex CLI 失败

先确认：

```bash
node -v
npm -v
```

如果 Node.js 和 npm 都正常，但 npm 安装仍然失败，可以先改用 [Codex 下载安装](/guide/codex-install) 里的官方脚本方式安装 Codex CLI。

### npm 下载速度慢

如果 npm 安装工具时速度很慢，可以先换网络环境再试。不要随意复制陌生来源的一键换源命令，避免后续下载到不可控的软件包。

### 已经装过 Node.js，还需要重装吗

不一定。只要 `node -v` 和 `npm -v` 都能正常显示版本号，并且后续工具可以正常安装，就可以继续使用当前版本。遇到兼容问题时，再考虑升级到 LTS 版本。

### 需要安装 nvm、fnm 或 Volta 吗

普通用户不需要一开始就安装版本管理工具。只有当你需要同时维护多个 Node.js 版本，或者不同项目要求不同 Node.js 版本时，再考虑使用 nvm、fnm 或 Volta。

## 下一步

完成 Node.js 环境后，可以继续：

- [平台注册](/guide/register)
- [账号充值](/guide/recharge)
- [API Key](/guide/api-key)

如果你使用的是 Codex App，并且没有用 npm 安装 Codex CLI，可以直接跳过本页。
