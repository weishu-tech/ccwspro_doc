---
title: Codex Base URL 怎么填
description: Codex、CC Switch 和 OpenAI 兼容工具接入 CCWS 时，Base URL 固定填写 https://www.ccws.pro/v1。
---

# Codex Base URL 怎么填

如果 Codex、CC Switch 或其他工具要求填写 OpenAI 兼容的 Base URL，请固定填写：

```text
https://www.ccws.pro/v1
```

这个地址用于模型接口请求。不要只填写官网根地址，也不要在 `/v1` 后面继续拼接模型路径。

## 应该填写哪个地址

| 场景 | 填写内容 |
| --- | --- |
| Codex Provider 的 Base URL | `https://www.ccws.pro/v1` |
| CC Switch 的 API 请求地址 | `https://www.ccws.pro/v1` |
| OpenAI 兼容工具的 Base URL | `https://www.ccws.pro/v1` |
| 官网链接或网站地址 | `https://www.ccws.pro` |

如果页面字段名是「官网链接」「Website」或「站点地址」，填写官网根地址。只有字段明确要求 Base URL、API 请求地址或 OpenAI 兼容地址时，才填写带 `/v1` 的地址。

## 配置前要准备什么

- 已经完成 [注册 / 登录](/guide/register)。
- 已经在 CCWS 控制台创建 API Key。
- 当前账号有可用额度。

如果还没有创建 Key，先看 [Codex API Key 配置](/guide/codex-api-key)。

## 填完后怎么验证

保存配置后，重新打开 Codex 或重启当前终端，再发送一个简单测试：

```text
请用一句话介绍当前项目，不要修改文件。
```

如果 Codex 能正常回复，说明 Base URL 和 API Key 已经被当前工具读取。

## 常见错误

- 只填写 `https://www.ccws.pro`：Codex API 请求需要 `/v1`。
- 填成 `https://www.ccws.pro/v1/chat/completions`：Base URL 不要填写完整接口路径。
- 修改配置后没有重启 Codex 或终端：工具可能仍在读取旧配置。
- API Key 来自其他账号或已失效：请回到控制台重新确认。

## 相关页面

- [请求地址 / API Key](/guide/api-key)
- [Codex 配置](/guide/codex)
- [CC Switch 添加 CCWS Provider](/guide/cc-switch-provider)
- [网络与连接排查](/troubleshooting/network)
