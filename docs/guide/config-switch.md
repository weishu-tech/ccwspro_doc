---
title: CC Switch 使用教程
description: 在 CC Switch 中添加自定义 Provider，填写你的中转站网址、API Key 和请求地址，并启用 ChatGPT（Codex）配置。
---

# CC Switch 使用教程

CC Switch 是装在你电脑上的一个配置管理小工具，用来保存中转站的请求地址和 API Key，方便在 ChatGPT 等工具之间切换配置。

![CC Switch 配置界面](/images/screenshots/cc-switch-codex-add-entry.png)

## 适合什么时候用

- 你同时有多个 API 服务或多个账号。
- 你不想每次手动修改 Codex 配置文件。
- 你需要在不同配置之间快速切换。

## 安装 CC Switch

macOS 用户可以通过 Homebrew 安装：

```bash
brew tap farion1231/ccswitch
brew install --cask cc-switch
```

也可以从 [CC Switch Releases](https://github.com/farion1231/cc-switch/releases) 页面下载最新安装包。打开页面后，先往下滑到 `Assets` 区域；如果只看到部分文件，点击「Show all ... assets」展开完整下载列表。

![展开 GitHub Releases 资源列表](/images/screenshots/cc-switch-github-assets-more.png)

展开后按自己的系统选择安装包：

| 系统 | 推荐下载 |
| --- | --- |
| macOS | 下载文件名以 `macOS.dmg` 结尾的安装包 |
| Windows | 下载文件名以 `Windows.msi` 结尾的安装包 |

![选择 CC Switch 安装包](/images/screenshots/cc-switch-github-assets-installers.png)

::: tip 提示
截图里的版本号只是示例。CC Switch 会持续更新，下载时看 Releases 页面上实际显示的最新版就行，不用认准某个固定版本。
:::

安装完成后打开 CC Switch。首次启动时，如果它提示导入已有配置，可以按页面提示导入；如果你是第一次配置 ChatGPT，也可以直接新建配置。

## 安装完成后填写你的中转站

### 进入 Codex 配置

1. 打开 CC Switch。
2. 点击顶部的 Codex 图标。
3. 点击右上角的「+」按钮。

![进入 Codex 配置并添加供应商](/images/screenshots/cc-switch-codex-add-entry.png)

### 选择自定义配置

1. 在「添加新供应商」页面，确认当前选择的是「Codex 供应商」。
2. 在预设供应商中点击「自定义配置」。
3. 如果页面内容较多，可以向下滚动继续填写。

![选择 Codex 自定义配置](/images/screenshots/cc-switch-custom-provider.png)

### 填写中转站信息

按下面内容填写：

| 字段 | 说明 |
| --- | --- |
| 供应商名称 | 填你中转站标题上的名字，方便后续识别 |
| 官网链接 | 填写你的中转站网址（从浏览器地址栏复制） |
| API Key | 粘贴当前账号生成的有效 Key |
| API 请求地址 | 中转站页面上如果写了 API 地址就填那个；没有的话，填中转站网址 + `/v1` |

填写完成后，点击右下角「添加」。

![填写供应商信息](/images/screenshots/cc-switch-provider-form.png)

::: tip 提示
「完整 URL」开关保持默认关闭就行。除非工作人员特别说明，一般只需要填兼容 OpenAI Response 格式的地址。
:::

### 启用配置并重启 ChatGPT

1. 回到 CC Switch 列表，找到刚添加的那一项。
2. 点击「启用」。
3. 关闭当前终端窗口，并重新打开终端。
4. 重新启动 ChatGPT（用命令行的话就重开终端），发起一次简单测试，确认请求能正常发出。

![启用配置](/images/screenshots/cc-switch-enable-provider.png)

## 切换 Provider 后显示 Codex 会话历史

如果你在不同 Provider 之间切换后，发现 ChatGPT 原来的聊天记录没有出现在历史列表里，可以开启 CC Switch 的统一会话历史设置。

### 进入设置

在 CC Switch 主界面点击左上方的齿轮按钮，进入设置页面。

![进入 CC Switch 设置](/images/screenshots/cc-switch-codex-history-settings-entry.png)

### 找到 Codex 应用增强

在「通用」页面向下滑动，找到「Codex 应用增强」区域。

![在通用设置中向下滑动](/images/screenshots/cc-switch-codex-history-general-scroll.png)

### 打开统一 Codex 会话历史

开启「统一 Codex 会话历史」。开启后，官方与第三方 Provider 的会话会出现在同一个历史列表里，切换配置后更容易找回之前的聊天记录。

![开启统一 Codex 会话历史](/images/screenshots/cc-switch-codex-history-toggle.png)

::: tip 提示
如果页面提示迁移现有官方会话，可以按提示确认，迁移前会自动备份。跨 Provider 继续旧会话时，对方服务可能无法识别旧会话中的部分加密内容；重要任务建议在当前 Provider 下新开会话。
:::

## 验证与排查

如果仍然请求失败，优先检查：

- ChatGPT 使用的请求地址是否为中转站网址 + `/v1`，或网站上专门说明的 API 地址。
- API Key 是否复制完整。
- 模型名称是否在你当前账号支持范围内。

## 使用建议

- 不要把配置文件提交到公开仓库。
- 多人协作时只共享配置字段，不共享真实 Key。
- 以后尽量通过 CC Switch 修改和切换配置，减少手动编辑配置文件造成的冲突。
- 切换配置后，重新打开终端再验证是否生效。
