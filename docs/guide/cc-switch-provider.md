---
title: CC Switch 添加 CCWS Provider
description: 在 CC Switch 的 Codex 配置中添加 CCWS Provider，填写官网、API 请求地址和 API Key 后启用。
---

# CC Switch 添加 CCWS Provider

如果你希望用 CC Switch 管理 Codex 配置，可以在 Codex 配置里添加一个 CCWS Provider。添加后，Codex 会通过 CCWS 的请求地址和 API Key 发起请求。

## 填写字段

在 CC Switch 的自定义 Provider 表单中填写：

| 字段 | 填写内容 |
| --- | --- |
| 供应商名称 | `CCWS` |
| 官网链接 | `https://www.ccws.pro` |
| API 请求地址 | `https://www.ccws.pro/v1` |
| API Key | 当前 CCWS 账号创建的有效 Key |

「完整 URL」开关通常保持默认关闭。除非工作人员特别说明，否则不要把 Base URL 改成完整接口路径。

## 操作步骤

1. 打开 CC Switch。
2. 进入 Codex 配置。
3. 点击添加 Provider。
4. 选择自定义配置。
5. 按上表填写 CCWS 信息。
6. 保存后启用 `CCWS` Provider。
7. 关闭当前终端或 Codex 客户端，然后重新打开。

如果你还没有安装 CC Switch，请先看 [CC Switch 使用教程](/guide/config-switch)。

## 启用后验证

打开 Codex，发送一个不修改文件的测试任务：

```text
请用一句话说明你已经可以正常回复。
```

如果可以正常回复，说明 CC Switch 已经把 CCWS 配置写入 Codex。

## 常见问题

- 找不到新增配置：确认是在 CC Switch 的 Codex 应用配置里添加，而不是其他工具配置里添加。
- 启用后仍然请求失败：重启 Codex 或重新打开终端。
- 提示 401：检查 API Key 是否复制完整，或回到控制台重新生成 Key。
- 提示模型不存在：检查 Codex 当前模型名称是否在 CCWS 当前支持范围内。

## 相关页面

- [Codex Base URL 怎么填](/guide/codex-base-url)
- [Codex API Key 配置](/guide/codex-api-key)
- [Codex 配置](/guide/codex)
- [401 / 403 / 429 排查](/troubleshooting/codex-error-401-403-429)
