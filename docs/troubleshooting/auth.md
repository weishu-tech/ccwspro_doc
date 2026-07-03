---
title: 认证与 API Key
description: 排查 CCWS API Key 无效、认证失败、Key 权限或复制错误导致的 Codex 和工具调用问题。
---

# 认证与 API Key

## Key 无效

常见原因：

- Key 复制时漏掉字符。
- Key 已被删除或禁用。
- 使用了其他账号下的 Key。
- 当前工具读取的是旧环境变量。

处理方式：

1. 在控制台重新生成 Key。
2. 更新本地配置。
3. 重启终端或 IDE。
4. 再发起一次测试请求。

## 401 Unauthorized

通常表示认证失败。请检查：

- 请求头是否正确携带 Key。
- 环境变量是否生效。
- 代理工具是否覆盖了请求头。

## 403 Forbidden

通常表示账号没有权限调用当前模型或接口。请确认套餐、余额和模型权限。

如果 401 或 403 出现在 Codex 里，可以继续按 [Codex 401 / 403 / 429 怎么排查](./codex-error-401-403-429) 的顺序检查 Provider、Base URL、API Key 和模型权限。
