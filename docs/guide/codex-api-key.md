---
title: Codex API Key 配置
description: 在 CCWS 控制台创建 API Key，并通过 CC Switch 或 Codex 本机配置安全填写到 Codex。
---

# Codex API Key 配置

Codex 使用 CCWS 时，需要同时配置 Base URL 和 API Key。Base URL 固定填写：

```text
https://www.ccws.pro/v1
```

API Key 需要你自己登录 CCWS 控制台创建。不要把真实 Key 发到聊天窗口、截图、群聊、公开仓库或共享文档里。

## 推荐方式：用 CC Switch 配置

推荐通过 CC Switch 管理 Codex Provider，这样后续切换配置更直观。

在 CC Switch 的 Codex 自定义 Provider 中填写：

| 字段 | 填写内容 |
| --- | --- |
| 供应商名称 | `CCWS` |
| 官网链接 | `https://www.ccws.pro` |
| API 请求地址 | `https://www.ccws.pro/v1` |
| API Key | 你在 CCWS 控制台创建的有效 Key |

填写完成后启用 Provider，并重启 Codex 客户端或终端。

完整步骤见 [CC Switch 添加 CCWS Provider](/guide/cc-switch-provider)。

## 备选方式：手动配置 Codex

如果不使用 CC Switch，可以把 Provider 写入用户级 Codex 配置文件。

`config.toml` 中的 Provider 示例：

```toml
model_provider = "ccws"

[model_providers.ccws]
name = "CCWS"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://www.ccws.pro/v1"
```

API Key 放到同一个用户级 `.codex` 目录下的 `auth.json`：

```json
{
  "OPENAI_API_KEY": "你在 CCWS 控制台创建的 API Key"
}
```

::: warning 安全提醒
不要把 `auth.json` 放进项目目录，也不要提交到 Git 仓库。
:::

## 配置后验证

重启 Codex 后发送一个简单任务：

```text
请确认你可以正常回复，只输出一句话。
```

如果请求失败，按顺序检查：

1. 当前启用的 Provider 是否是 `CCWS`。
2. Base URL 是否是 `https://www.ccws.pro/v1`。
3. API Key 是否复制完整。
4. 配置保存后是否重启了 Codex 或终端。
5. 当前账号是否有余额和模型权限。

## 相关页面

- [请求地址 / API Key](/guide/api-key)
- [Codex Base URL 怎么填](/guide/codex-base-url)
- [Codex 配置](/guide/codex)
- [认证与 API Key 排查](/troubleshooting/auth)
