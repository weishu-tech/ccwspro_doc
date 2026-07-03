---
title: 请求错误
description: 根据 CCWS 和工具返回的错误信息排查 Base URL、模型名称、API Key、余额和请求格式问题。
---

# 请求错误

## 400 Bad Request

通常表示请求参数不合法。

检查：

- 模型名称是否正确。
- messages 格式是否符合接口要求。
- 请求体是否包含多余字段。

## 429 Too Many Requests

通常表示请求过快、额度不足或触发限流。

处理：

- 降低并发。
- 稍后重试。
- 检查余额或套餐限制。
- 联系管理员提升额度。

如果是在 Codex 中遇到 401、403 或 429，可以继续看 [Codex 401 / 403 / 429 怎么排查](./codex-error-401-403-429)。

如果错误信息包含 `model not found`、`model_not_found` 或「模型不存在」，继续看 [Codex model not found 怎么处理](./model-not-found)。

## 500 / 502 / 503

通常表示服务端或上游服务异常。建议保留请求时间、模型名称、错误信息，提交给技术支持排查。
