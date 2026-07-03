---
title: Codex CLI
description: 排查 Codex CLI 启动、配置读取、Provider 切换、Base URL 和 API Key 相关问题。
---

# Codex CLI

## Codex 读取不到 Key

如果使用手动配置，先检查 `auth.json` 是否存在：

| 系统 | API Key 文件 |
| --- | --- |
| macOS / Linux | `~/.codex/auth.json` |
| Windows | `C:\Users\你的用户名\.codex\auth.json` |

文件内容应类似：

```json
{
  "OPENAI_API_KEY": "你在CCWS申请的API key"
}
```

如果你使用的是环境变量方式，再检查当前终端是否能读取到变量：

```bash
echo $OPENAI_BASE_URL
echo $OPENAI_API_KEY
```

如果为空，说明当前终端没有加载环境变量配置。

## 请求到了错误的服务

如果你同时配置过多个服务商，请确认当前 Base URL 指向 CCWS。

## 模型不可用

请在 CCWS 控制台确认当前账号可用模型，并把 Codex 配置里的模型名称改成一致。
