---
title: 请求地址 / API Key
description: 查看 CCWS 固定请求地址、OpenAI 兼容 Base URL、API Key 创建方式，以及 Codex 和 Codex 生图环境变量配置示例。
---

# 请求地址 / API Key

完成平台注册和账号充值后，请在控制台创建并复制 API Key。请求地址不需要从控制台查找，直接使用本页给出的固定地址即可。

![API 密钥页面](/images/screenshots/api-key-list.png)

## 获取 API Key

1. 登录 CCWS 控制台。
2. 进入「API Key」或「密钥管理」页面。
3. 点击「创建 Key」。
4. 复制生成的 Key，并保存到本地安全位置。

![创建 API 密钥](/images/screenshots/api-key-create.png)

::: warning 安全提醒
API Key 等同于账号调用凭证，不要公开到 GitHub、截图、群聊或文章正文中。
:::

## 请求地址

CCWS 当前统一请求地址固定填写：

```text
https://www.ccws.pro
```

如果配置的是 Codex、CC Switch 的 Codex Provider，或者工具明确要求填写 OpenAI 兼容的 Base URL，固定填写：

```text
https://www.ccws.pro/v1
```

## 环境变量示例

Codex 场景可以这样填写：

```bash
export OPENAI_BASE_URL="https://www.ccws.pro/v1"
export OPENAI_API_KEY="你的 API Key"
```

Codex 生图技能需要单独配置生图 API Key：

::: code-group

```bash [macOS / Linux]
export CCWS_IMAGE_API_KEY="你的 CCWS 生图 API Key"
```

```powershell [Windows PowerShell]
$env:CCWS_IMAGE_API_KEY="你的 CCWS 生图 API Key"
```

:::

生图 API Key 需要确认支持：

```text
model: gpt-image-2
```

具体安装步骤见 [Codex 生图教程](/guide/codex-image)。

## 下一步

API Key 创建后，继续完成：

- [Codex Base URL 怎么填](/guide/codex-base-url)
- [Codex API Key 配置](/guide/codex-api-key)
- [高级教程：CC Switch 使用教程](/guide/config-switch)
- [CC Switch 添加 CCWS Provider](/guide/cc-switch-provider)
- [Codex 配置](/guide/codex)
- [高级教程：Codex 生图教程](/guide/codex-image)

如果你使用 `npm` 方式安装或更新 Codex CLI，再回到 [Codex安装](/guide/nodejs-git) 章节补充 Node.js 环境。

## 检查清单

- Base URL 没有多余空格。
- Codex 配置使用 `https://www.ccws.pro/v1`。
- Key 使用的是当前账号下最新有效的 Key。
- 如果用于 Codex 生图技能，确认 Key 支持 `gpt-image-2`。
- 工具配置中的模型名称和 CCWS 支持的模型一致。
- 如果使用团队账号，确认当前 Key 有调用权限。
