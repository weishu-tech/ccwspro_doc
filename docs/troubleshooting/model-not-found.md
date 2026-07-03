---
title: Codex model not found 怎么处理
description: Codex 或 OpenAI 兼容工具提示 model not found 时，按模型名称、账号权限、Key 权限和配置读取顺序排查。
---

# Codex model not found 怎么处理

`model not found`、`model_not_found` 或「模型不存在」通常表示工具请求的模型名称无法被当前账号调用。它不一定是 Base URL 错误。

Codex 接入 CCWS 时，Base URL 仍然保持：

```text
https://www.ccws.pro/v1
```

## 常见原因

- 模型名称写错。
- 当前账号没有该模型权限。
- 当前 API Key 所在分组不支持该模型。
- Codex 或 CC Switch 仍在读取旧配置。
- 切换 Provider 后没有重启 Codex 或终端。

## 排查顺序

1. 确认当前启用的是 `CCWS` Provider。
2. 确认 Base URL 是 `https://www.ccws.pro/v1`。
3. 检查 Codex 配置里的模型名称是否和 CCWS 当前支持的模型一致。
4. 回到 CCWS 控制台确认当前账号和 Key 是否有模型权限。
5. 保存配置后，重启 Codex 客户端或重新打开终端。
6. 再发送一次简单测试请求。

## 不要优先改这些

- 不要把 Base URL 改成完整接口路径。
- 不要把官网根地址当成 Codex Base URL。
- 不要把其他账号的 API Key 混到当前配置中。
- 不要把真实 API Key 发到聊天窗口或群聊里让别人排查。

## 如果使用 CC Switch

打开 CC Switch，确认：

- 当前 Codex 启用的是 `CCWS`。
- API 请求地址是 `https://www.ccws.pro/v1`。
- API Key 已更新为当前账号的有效 Key。
- 启用后已经重启 Codex。

## 相关页面

- [CC Switch 添加 CCWS Provider](/guide/cc-switch-provider)
- [Codex API Key 配置](/guide/codex-api-key)
- [工具兼容](/troubleshooting/integration)
- [请求错误](/troubleshooting/request-error)
