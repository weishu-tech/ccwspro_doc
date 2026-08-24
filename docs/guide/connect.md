---
title: 配置 ChatGPT
description: 把你的中转站请求地址和 API Key 填进 ChatGPT（Codex），发一条测试消息确认配置完成。零基础用户跟着做即可。
---

# 配置 ChatGPT

这是最关键的一步：把 ChatGPT 连到你的中转站。做完这一步，**ChatGPT 能正常回复你，就说明配置全部完成**，可以开始用了。

## 开始前，先检查材料齐不齐

这一步需要两样东西，缺一不可：

| 材料 | 怎么拿到 | 完成标志 |
| --- | --- | --- |
| API Key | [创建 API Key](/guide/api-key) | 手里有一串以 `sk-` 开头的 Key |
| 中转站网址 | 打开中转站（你用来登录、充值、创建 Key 的网站），从浏览器地址栏复制 | 能完整抄写 |

请求地址这样填：

- 中转站页面上如果写了 API 地址，就填那个。
- 没有的话，在中转站网址末尾加上 `/v1`。

举例：中转站网址是 `https://example.com`，页面上也没另外写 API 地址，请求地址就填 `https://example.com/v1`。不要填成 `.../v1/chat/completions`。

::: warning ⚠️ 没材料先别往下走
- 还没创建 API Key？先回 [创建 API Key](/guide/api-key)，几分钟就好。
- 还没充值？回 [充值](/guide/recharge)，不然配置好了也调不通。
- 还没装 ChatGPT？回 [安装 ChatGPT](/guide/codex-install)。
:::

## 怎么配置：用 CC Switch

配置只需要一个工具：**CC Switch**（一个可视化小工具，有界面、能点鼠标，不用碰任何配置文件）。跟着下面的步骤做就行。

---

## 用 CC Switch 配置

### 安装并打开 CC Switch

打开 [CC Switch 使用教程](/guide/config-switch)（里面有下载地址和安装步骤），把 CC Switch 装好并打开。

装好后你会看到 CC Switch 的主窗口，左边有 Codex、Claude 等工具的入口。

### 进入 Codex 配置，添加供应商

1. 在 CC Switch 里点击 **Codex** 入口。
2. 找到「自定义 Provider」（自定义服务商）或「添加 Provider」按钮，点它。
3. 按下表填写：

| 字段 | 填写内容 |
| --- | --- |
| 供应商名称 | 填你中转站标题上的名字，方便自己认 |
| 官网链接 | 你的中转站网址 |
| API 请求地址（Base URL） | 中转站网址后面加上 `/v1`，或者网站上专门说明的 API 地址 |
| API Key | 你在控制台复制的那串 `sk-` 开头的 Key |

::: tip 💡 字段名不一样？
不同版本的 CC Switch 字段名可能略有不同。记住一个原则：**只要字段要求填「官网 / 网站」，就填你的中转站网址；只要字段要求填「请求地址 / Base URL」，就填中转站网址加 `/v1`，或者网站上专门说明的 API 地址。**
:::

### 启用并重启 ChatGPT

1. 在 CC Switch 里把刚才添加的那一项 **启用**（通常是点一下开关或点「启用」按钮）。
2. **完全退出 ChatGPT，再重新打开**（不是关窗口，是从 Dock / 任务栏退出后重新启动）。
   - 用命令行的话：关掉终端窗口，重新开一个新的。

::: warning ⚠️ 这一步最容易忘
填完配置后**必须重启 ChatGPT**（用命令行的话就重开终端），不然它还在用旧配置。90% 的"配置了没反应"都是这个原因。
:::

---

## 🎉 验证：怎么确认配置完成

最后做这一步——**发一条测试消息**：

在 ChatGPT 的输入框里输入下面这句话，发送：

```text
确认一下你能正常回复，只说一句话，不要改任何文件。
```

**看到 ChatGPT 正常回复你，恭喜，配置完成！** ✅ 从这一步开始，ChatGPT 就已经连上你的中转站在工作了。

![ChatGPT 首次测试对话](/images/screenshots/codex-client-first-message.png)

### 测试前再检查一遍

如果 ChatGPT 没回复、报错了，按顺序检查：

| 检查项 | 怎么做 |
| --- | --- |
| 1. Provider 启用了没 | 打开 CC Switch，确认你刚添加的那一项是启用状态 |
| 2. 地址填对没 | 请求地址应是中转站网址 + `/v1`，或网站上专门说明的 API 地址 |
| 3. Key 复制完整没 | 回控制台重新复制一次，确认没多空格、没少字符 |
| 4. 重启了没 | 退出 ChatGPT 重新打开（命令行就重开终端） |
| 5. 余额够不够 | 回 [充值页](/guide/recharge) 看钱包余额 |
| 6. 报错代码是什么 | 按错误码查：[网络与连接排查](/troubleshooting/network) |

---

## 配置完成，接下来呢？

到这里，主线就全部走完了 🎉 现在你可以：

- **直接开始用**：在 ChatGPT 里描述你想做的事，它会帮你写代码、改代码。
- **进阶功能（可选）**：等用顺手了，再回来看看 [CC Switch 使用教程](/guide/config-switch)、[ChatGPT 生图教程](/guide/codex-image)。
- **遇到问题**：去 [疑难解答总览](/troubleshooting/) 按症状查。

---

::: details 🔧 想自己研究？手动改配置文件的方式（仅技术人员）
普通用户不需要看这一段。只有想自己研究、或者不用 CC Switch 的人才需要手动改两个文件，都在你电脑的用户目录（不是项目目录）里：

| 系统 | 配置文件位置 |
| --- | --- |
| macOS / Linux | `~/.codex/config.toml` 和 `~/.codex/auth.json` |
| Windows | `C:\Users\你的用户名\.codex\config.toml` 和 `C:\Users\你的用户名\.codex\auth.json` |

**1. 改 config.toml（填请求地址）**：用文本编辑器打开 `config.toml`，确认或修改成下面这样（没有这个文件就新建一个）。把 `mysite` 换成你自己好认的英文名，把 `https://你的中转站网址/v1` 换成你的实际请求地址；如果中转站上专门写了 API 地址，`base_url` 就填那个：

```toml
model_provider = "mysite"
model = "gpt-5.5"

[model_providers.mysite]
name = "你的中转站名称"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://你的中转站网址/v1"
```

::: warning ⚠️ 注意
网站没有专门说明 API 地址时，`base_url` 要带 `/v1`。只填中转站网址、不带 `/v1` 会连不上。
:::

**2. 改 auth.json（填 API Key）**：在同一个 `.codex` 目录里，找到或新建 `auth.json`，把 API Key 填进去：

```json
{
  "OPENAI_API_KEY": "你在控制台复制的 API Key"
}
```

::: warning 安全提醒
`auth.json` 里存的是你的密码（API Key），**不要**把它放进项目文件夹，也**不要**提交到 Git（代码仓库）里。
:::

**3. 重启**：保存两个文件后，关掉终端窗口，重新打开一个新的，再进入你的项目目录运行：

```bash
cd 你的项目目录
codex
```

:::
