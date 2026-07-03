---
title: Codex 配置
description: 使用 CC Switch 或手动配置方式把 CCWS 添加到 Codex，填写 https://www.ccws.pro/v1 和 API Key 后完成请求验证。
---

# Codex 配置

这一步要做两件事：

- 用 CC Switch 把 CCWS 添加到 Codex 里。
- 打开 Codex 发一条测试消息，确认可以正常使用。

配置前需要先拿到 CCWS 的 API Key。如果还没有生成，先回到 [请求地址 / API Key](/guide/api-key) 页面完成创建。

::: tip 推荐路线
推荐使用 `Codex 客户端` + `CC Switch`。这样不用手动找配置文件，后面切换 Provider 也更方便。
:::

如果你使用 `npm` 方式安装或更新 Codex CLI，再先确认 [Node.js 环境（CLI 可选）](/guide/nodejs-git) 已经可用；使用 Codex App 或官方脚本安装 CLI 可以跳过这一步。

## 先配置 CC Switch

如果你还没有配置过 CC Switch，先打开 [CC Switch 使用教程](/guide/config-switch)，照着完成下面几件事：

- 安装并打开 CC Switch。
- 进入 Codex 配置。
- 添加自定义 Provider。
- 填写 `https://www.ccws.pro/v1` 和你的 API Key。
- 启用 `CCWS` Provider。
- 重启 Codex 客户端，或关闭终端后重新打开终端。

如果只想确认字段怎么填，可以直接看 [Codex Base URL 怎么填](/guide/codex-base-url) 和 [CC Switch 添加 CCWS Provider](/guide/cc-switch-provider)。

完成后回到本页，继续下面的客户端或命令行验证。

## 客户端验证（推荐）

### 确认 CCWS 已启用

打开 CC Switch，确认当前启用的是 `CCWS` Provider。

需要重点确认：

- Provider 名称为 `CCWS` 或其他你能识别的名称。
- API 请求地址填写 `https://www.ccws.pro/v1`。
- API Key 已复制完整。
- 启用 Provider 后，重新启动 Codex 客户端。

### 打开项目文件夹

在 Codex 客户端中打开你要处理的项目文件夹。如果页面提供运行位置选择，优先选择 `Local`，让 Codex 在你的电脑本地项目中工作。

![Codex 客户端选择项目文件夹](/images/screenshots/codex-client-open-project.png)

### 发起第一次测试

打开项目后，先发送一个简单任务确认配置是否生效：

```text
请用一句话介绍这个项目的主要功能，不要修改文件。
```

如果 Codex 能正常回复，说明客户端已经可以通过当前 Provider 发起请求。

![Codex 客户端首次测试对话](/images/screenshots/codex-client-first-message.png)

## 命令行验证（进阶）

命令行方式也推荐先用 CC Switch 管理 Provider。确认 `CCWS` 已经启用后，重新打开终端运行 Codex。

```bash
cd 你的项目目录
codex
```

## 手动配置方式（备选）

如果你不使用 CC Switch，也可以手动配置 Codex。只有在你明确想自己维护配置文件时，再看这一段。

请优先使用用户级配置文件，不要把 API Key 写进项目仓库。

配置文件位置：

| 系统 | 配置文件 |
| --- | --- |
| macOS / Linux | `~/.codex/config.toml` |
| Windows | `C:\Users\你的用户名\.codex\config.toml` |

参考配置如下：

```toml
model_provider = "ccws"
model = "gpt-5.5"
model_reasoning_effort = "xhigh"

[model_providers.ccws]
name = "CCWS"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://www.ccws.pro/v1"
```

::: warning 注意
Codex 的 `base_url` 需要带 `/v1`，请填写 `https://www.ccws.pro/v1`。
:::

然后在同一个 `.codex` 目录中创建或修改 `auth.json`：

| 系统 | API Key 文件 |
| --- | --- |
| macOS / Linux | `~/.codex/auth.json` |
| Windows | `C:\Users\你的用户名\.codex\auth.json` |

参考配置如下：

```json
{
  "OPENAI_API_KEY": "你在CCWS申请的API key"
}
```

::: warning 安全提醒
`auth.json` 里保存的是你的 API Key，不要把它放进项目目录，也不要提交到 Git 仓库。
:::

保存 `config.toml` 和 `auth.json` 后，重新打开终端，再进入项目目录运行：

```bash
cd 你的项目目录
codex
```

## 后续使用建议

- 普通需求直接在 Codex 里描述任务。
- 需要修改代码时，先让 Codex 说明计划，再确认执行。
- 切换 Provider 后，建议重启 Codex 再验证。
- 如果需要在 Codex 里生成或编辑图片，可继续配置 [Codex 生图教程](/guide/codex-image)。
- 如果切换 Provider 后找不到原来的会话，可参考 [切换 Provider 后显示 Codex 会话历史](/guide/config-switch#切换-provider-后显示-codex-会话历史)。

## 验证与排查

如果 Codex 无法正常请求，优先检查：

- CC Switch 当前启用的 Provider 是否为 `CCWS`。
- Codex 请求地址是否为 `https://www.ccws.pro/v1`。
- 手动配置时，`auth.json` 是否放在正确的 `.codex` 目录中。
- API Key 是否复制完整、是否仍然有效。
- 模型名称是否在 CCWS 当前支持范围内。
- 修改配置后是否重新打开终端或重启客户端。

如果命令行提示 `codex: command not found`，说明 Codex CLI 还没有安装好，请回到 [Codex 下载安装](/guide/codex-install) 重新验证。

如果客户端可以打开但请求失败，先回到 CC Switch 中重新启用一次 Provider，再重启 Codex 客户端验证。

如果 Codex 返回 401、403、429 或模型不存在，可以继续查看：

- [Codex 401 / 403 / 429 怎么排查](/troubleshooting/codex-error-401-403-429)
- [Codex model not found 怎么处理](/troubleshooting/model-not-found)
