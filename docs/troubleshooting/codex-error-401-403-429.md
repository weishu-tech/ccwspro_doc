---
title: Codex 401 / 403 / 429 怎么排查
description: Codex 接入 CCWS 后出现 401、403 或 429 时，按 API Key、权限、余额、限流和配置读取顺序排查。
---

# Codex 401 / 403 / 429 怎么排查

Codex 返回 401、403 或 429 时，先不要反复改 Base URL。Codex 接入 CCWS 的 Base URL 固定是：

```text
https://www.ccws.pro/v1
```

这类错误通常和 API Key、账号权限、额度、限流或工具读取旧配置有关。

## 先看错误含义

| 错误 | 常见含义 | 优先检查 |
| --- | --- | --- |
| 401 Unauthorized | 认证失败 | API Key 是否正确、是否生效、是否被工具读取 |
| 403 Forbidden | 没有权限调用 | 账号权限、模型权限、套餐或余额 |
| 429 Too Many Requests | 请求过快或额度受限 | 并发、频率、余额、套餐限制 |

## 401 排查

按顺序检查：

1. 当前 Codex 启用的 Provider 是否是 `CCWS`。
2. API Key 是否来自当前 CCWS 账号。
3. API Key 是否复制完整，没有多余空格或遗漏字符。
4. 配置保存后是否重启了 Codex 客户端或终端。
5. 如果手动配置，`auth.json` 是否放在用户级 `.codex` 目录中。

如果不确定 Key 是否正确，回到 CCWS 控制台重新创建一个 Key，再更新本机配置。

## 403 排查

403 通常不是网络问题，而是当前账号或 Key 没有权限调用目标模型或接口。

检查：

- 当前账号是否有可用额度。
- 当前 Key 是否属于正确账号。
- 当前模型名称是否在 CCWS 当前支持范围内。
- 如果是团队或分组 Key，确认这个 Key 有调用权限。

## 429 排查

429 通常表示请求频率、并发或额度受限。

处理：

- 降低并发或减少连续请求。
- 等待一段时间后重试。
- 检查账号余额或套餐限制。
- 如果是多人共用账号，确认是否有其他工具同时调用。

## 仍然失败时

联系支持前，请准备：

- 出错时间。
- Codex 使用的模型名称。
- 完整错误信息截图。
- 当前使用的是 CC Switch 还是手动配置。
- 不要发送真实 API Key。

## 相关页面

- [Codex API Key 配置](/guide/codex-api-key)
- [Codex Base URL 怎么填](/guide/codex-base-url)
- [认证与 API Key](/troubleshooting/auth)
- [请求错误](/troubleshooting/request-error)
