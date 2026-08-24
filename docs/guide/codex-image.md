---
title: ChatGPT 生图教程
description: 安装生图技能，配置 CCWS_IMAGE_API_KEY，并在 ChatGPT（Codex）中使用 gpt-image-2 生成、编辑或处理图片。
---

# ChatGPT 生图教程

生图技能可以让 ChatGPT 在生图、图片编辑、图生图、局部修改和背景替换等任务中调用生图模型。

开始前，先准备好这些：

- 已完成 [配置 ChatGPT](/guide/connect)，并确认 ChatGPT 可以正常对话。
- 可以登录你的中转站控制台，并创建可用于生图的 API Key。
- 本机已安装 Python。macOS / Linux 通常使用 `python3`，Windows 通常使用 `py -3`。

::: tip 适用场景
如果你希望在 ChatGPT 里直接说“帮我生成一张图”“把这张图改成某种风格”“替换图片背景”，就可以安装这个生图技能。
:::

## 推荐方式：让 AI 按本文安装

如果你已经能正常使用 ChatGPT，可以直接把下面这段话发给 ChatGPT，让它读取本文并按步骤安装：

```text
请阅读这个页面：https://docs.ccws.pro/guide/codex-image

按照页面步骤帮我在本机安装生图技能。请先检查我的 ChatGPT、Python 和安装包准备情况，再根据我的系统执行对应命令。

需要 API Key 时，请提醒我先自己登录中转站控制台创建生图 API Key。不要让我把真实 Key 发到聊天窗口里。

请根据我的系统生成一段本机环境变量配置脚本，变量名必须是 CCWS_IMAGE_API_KEY（这是安装器要求的固定变量名，不要改名），并用“在这里粘贴你的生图 API Key”作为占位符。等我在本机终端执行完成后，再继续安装。

安装完成后，提醒我新开 ChatGPT 会话，或重启 ChatGPT 桌面应用 / Codex CLI，并用一个简单的生图任务验证是否生效。
```

如果 ChatGPT 暂时无法读取网页，可以把本文内容复制给它，再让它按步骤执行。

## 1. 获取生图 API Key

进入你的中转站控制台，创建生图分组 API Key，并确认这个 Key 支持：

```text
model: gpt-image-2
```

创建后复制 API Key，并保存到本地安全位置。不要把 API Key 发到聊天窗口、截图、群聊或公开仓库中。

如果你让 AI 协助安装，这一步仍然需要你自己在控制台完成。完成后可以让 AI 提供本机环境变量配置脚本，脚本里使用占位符，你在本机终端里把占位符替换成真实 Key 后执行。

可以把下面这段话发给 AI：

```text
我已经在控制台创建好支持 gpt-image-2 的生图 API Key。

请根据我的系统生成一段本机环境变量配置脚本，变量名必须是 CCWS_IMAGE_API_KEY。

脚本中请使用“在这里粘贴你的生图 API Key”作为占位符，不要让我把真实 Key 发到聊天窗口里。
```

## 2. 下载安装包

打开 [生图技能 Releases](https://github.com/xiaofengtongxue-lab/ccws-codex-image-skill/releases)，下载最新版本的安装包。

安装包文件名通常类似：

```text
ccws-image-generation-installer-v版本号.zip
```

下载后解压到一个你能找到的位置，例如桌面或下载目录。

## 3. 配置环境变量

安装前需要先配置 `CCWS_IMAGE_API_KEY`。这是安装器要求的固定变量名，必须按这个名字写，不要改名。建议配置为长期环境变量，否则重启终端或 ChatGPT 后可能需要重新设置。

::: code-group

```bash [macOS / Linux 临时生效]
export CCWS_IMAGE_API_KEY="你的生图 API Key"
```

```powershell [Windows PowerShell 临时生效]
$env:CCWS_IMAGE_API_KEY="你的生图 API Key"
```

:::

长期配置可以这样设置：

::: code-group

```bash [macOS / Linux zsh]
echo 'export CCWS_IMAGE_API_KEY="你的生图 API Key"' >> ~/.zshrc
source ~/.zshrc
```

```bash [macOS / Linux bash]
echo 'export CCWS_IMAGE_API_KEY="你的生图 API Key"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows PowerShell]
[Environment]::SetEnvironmentVariable("CCWS_IMAGE_API_KEY", "你的生图 API Key", "User")
```

:::

Windows 长期配置后，需要重新打开 PowerShell，或重启 ChatGPT 桌面应用 / Codex CLI，让新环境变量生效。

::: warning 注意
这个 Key 是生图技能使用的 Key，不要和普通聊天配置里的 `auth.json` 混在一起。安装器和生图技能都会读取 `CCWS_IMAGE_API_KEY`，如果没有配置，会停止安装或无法生图。
:::

## 4. 运行安装器

进入解压后的安装包目录，再运行安装命令。

::: code-group

```bash [macOS / Linux]
cd 解压后的安装包目录
python3 install.py --yes
```

```powershell [Windows PowerShell]
cd 解压后的安装包目录
py -3 .\install.py --yes
```

:::

安装器会执行这些操作：

1. 检查本机已有的生图技能。
2. 检查 `CCWS_IMAGE_API_KEY` 是否已配置。
3. 安装 `ccws-image-generation` 技能。
4. 提示你新开 ChatGPT 会话，或重启 ChatGPT 桌面应用 / Codex CLI。

如果安装器提示本机已经有其他生图技能，建议先按提示处理，避免多个生图技能同时响应同一个任务。

## 5. 重启 ChatGPT 或重开终端

安装完成后，新开一个 ChatGPT 会话，或重启 ChatGPT 桌面应用 / Codex CLI。

重启后再测试生图任务，不要在旧会话里直接测试。

## 6. 测试生图

可以先用一个简单任务确认是否生效：

```text
帮我生成一张 16:9 的产品宣传图，主题是 AI 编程工具，画面要简洁、明亮、适合放在文档首页。
```

如果需要图片编辑，可以把图片发给 ChatGPT 后再描述修改要求：

```text
把这张图的背景替换成浅色办公桌面风格，主体保持不变。
```

## 常见问题

### 提示没有配置 CCWS_IMAGE_API_KEY

说明当前终端没有读取到生图 API Key。重新执行环境变量配置命令后，再运行安装器。长期配置后，需要重新打开终端，或重启 ChatGPT 桌面应用 / Codex CLI。

### 安装后 ChatGPT 仍然没有生图

按顺序检查：

1. 是否已经新开 ChatGPT 会话，或重启 ChatGPT 桌面应用 / Codex CLI。
2. 安装器是否提示 `ccws-image-generation` 安装成功。
3. `CCWS_IMAGE_API_KEY` 对应的 Key 是否支持 `gpt-image-2`。
4. 本机是否存在其他生图技能导致冲突。

### Windows 提示找不到 py

说明 Windows 当前没有可用的 Python 启动器。请先安装 Python，再重新打开 PowerShell 执行安装命令。

## 相关链接

- [生图技能仓库](https://github.com/xiaofengtongxue-lab/ccws-codex-image-skill)
- [下载安装包](https://github.com/xiaofengtongxue-lab/ccws-codex-image-skill/releases)
