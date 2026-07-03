import { defineConfig } from 'vitepress'
import type { HeadConfig, TransformContext } from 'vitepress'

const siteUrl = 'https://docs.ccws.pro'
const siteTitle = 'CCWS 文档'
const siteDescription = 'CCWS 用户使用说明书：Codex安装、平台注册、账号充值、API Key、高级教程与疑难解答'
const siteImage = `${siteUrl}/images/home-hero.png`
const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

type SchemaNode = Record<string, unknown>

const howToPages: Record<string, { name: string; description: string; steps: string[] }> = {
  'guide/api-key.md': {
    name: '创建并配置 CCWS API Key',
    description: '在 CCWS 控制台创建 API Key，并为 Codex、CC Switch 或 OpenAI 兼容工具填写请求地址。',
    steps: ['登录 CCWS 控制台', '进入 API Key 或密钥管理页面', '创建并复制 API Key', '在工具中填写 https://www.ccws.pro/v1 和 API Key', '发送测试请求确认配置生效']
  },
  'guide/codex.md': {
    name: '配置 Codex 使用 CCWS',
    description: '通过 CC Switch 或手动配置方式把 CCWS 添加到 Codex，并完成一次测试请求。',
    steps: ['准备 CCWS API Key', '在 CC Switch 中添加 CCWS Provider', '填写 https://www.ccws.pro/v1', '启用 CCWS Provider 并重启 Codex', '发送简单消息确认 Codex 可以正常请求']
  },
  'guide/config-switch.md': {
    name: '在 CC Switch 中添加 CCWS Provider',
    description: '安装 CC Switch，添加自定义 Codex Provider，并填写 CCWS 请求地址和 API Key。',
    steps: ['安装并打开 CC Switch', '进入 Codex 配置', '添加自定义 Provider', '填写 CCWS 官网、API Key 和 https://www.ccws.pro/v1', '启用 Provider 并重启 Codex']
  },
  'guide/codex-image.md': {
    name: '安装 CCWS Codex Image Skill',
    description: '配置 CCWS_IMAGE_API_KEY，并在 Codex 中使用支持 gpt-image-2 的 Key 进行生图。',
    steps: ['在 CCWS 控制台创建支持 gpt-image-2 的生图 API Key', '在本机配置 CCWS_IMAGE_API_KEY', '下载并解压安装包', '运行安装器', '重启 Codex 并发送生图测试任务']
  },
  'guide/codex-base-url.md': {
    name: '填写 Codex Base URL',
    description: '确认 Codex、CC Switch 和 OpenAI 兼容工具应填写的 CCWS Base URL。',
    steps: ['确认工具要求填写 OpenAI 兼容 Base URL', '填写 https://www.ccws.pro/v1', '确认 API Key 来自 CCWS 控制台', '保存配置并重启工具', '发送测试请求确认配置生效']
  },
  'guide/codex-api-key.md': {
    name: '配置 Codex API Key',
    description: '为 Codex 配置 CCWS API Key，并避免把真实 Key 写入项目仓库或聊天窗口。',
    steps: ['登录 CCWS 控制台', '创建或复制当前账号下的 API Key', '通过 CC Switch 或 auth.json 写入本机配置', '保存后重启 Codex', '发送测试消息确认 Key 生效']
  },
  'guide/cc-switch-provider.md': {
    name: '添加 CCWS Provider 到 CC Switch',
    description: '在 CC Switch 的 Codex 配置中添加并启用 CCWS Provider。',
    steps: ['打开 CC Switch 的 Codex 配置', '选择自定义 Provider', '填写 Provider 名称 CCWS', '填写官网 https://www.ccws.pro 和请求地址 https://www.ccws.pro/v1', '启用 Provider 后重启 Codex']
  }
}

const faqPages: Record<string, { name: string; acceptedAnswer: string }[]> = {
  'troubleshooting/auth.md': [
    {
      name: '遇到 401 Unauthorized 应该先检查什么？',
      acceptedAnswer: '先检查 API Key 是否复制完整、是否来自当前 CCWS 账号、工具是否读取了最新配置，以及请求头是否正确携带 Key。'
    },
    {
      name: '遇到 403 Forbidden 通常表示什么？',
      acceptedAnswer: '通常表示当前账号、套餐、余额或 Key 权限不满足当前模型或接口调用要求。'
    }
  ],
  'troubleshooting/request-error.md': [
    {
      name: '429 Too Many Requests 应该怎么处理？',
      acceptedAnswer: '降低并发、稍后重试，并检查余额、套餐限制或额度设置。'
    },
    {
      name: '500、502、503 应该提供哪些信息给支持？',
      acceptedAnswer: '保留请求时间、模型名称、完整错误信息和工具日志，方便支持人员定位服务端或上游异常。'
    }
  ],
  'troubleshooting/codex-error-401-403-429.md': [
    {
      name: 'Codex 返回 401 应该怎么排查？',
      acceptedAnswer: '确认 Codex 当前启用的是 CCWS 配置，API Key 未复制错误，配置保存后已经重启 Codex。'
    },
    {
      name: 'Codex 返回 403 或 429 应该怎么排查？',
      acceptedAnswer: '403 重点检查模型和账号权限；429 重点检查请求频率、余额、套餐限制和并发。'
    }
  ],
  'troubleshooting/model-not-found.md': [
    {
      name: 'model not found 通常是什么原因？',
      acceptedAnswer: '通常是模型名称写错、当前账号或 Key 没有对应模型权限，或工具读取了旧配置。'
    },
    {
      name: '修复 model not found 时要不要改 Base URL？',
      acceptedAnswer: '如果是 Codex 或 OpenAI 兼容工具接入 CCWS，Base URL 仍应保持 https://www.ccws.pro/v1，优先检查模型名称和权限。'
    }
  ]
}

function pagePath(relativePath: string) {
  if (!relativePath || relativePath === 'index.md') return '/'

  if (relativePath.endsWith('/index.md')) {
    return `/${relativePath.slice(0, -'index.md'.length)}`
  }

  return `/${relativePath.replace(/\.md$/, '')}`
}

function pageUrl(relativePath: string) {
  return `${siteUrl}${pagePath(relativePath)}`
}

function structuredData(context: TransformContext): SchemaNode {
  const { pageData, title, description } = context
  const url = pageUrl(pageData.relativePath)
  const path = pagePath(pageData.relativePath)
  const isHome = path === '/'
  const pageType = isHome ? 'WebPage' : 'TechArticle'
  const breadcrumbItems: SchemaNode[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: siteTitle,
      item: `${siteUrl}/`
    }
  ]

  if (!isHome) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: pageData.title || title,
      item: url
    })
  }

  const graph: SchemaNode[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'CCWS',
      url: 'https://www.ccws.pro/',
      logo: `${siteUrl}/images/logo.png`
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: 'zh-CN',
      publisher: { '@id': organizationId }
    },
    {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'zh-CN',
      isPartOf: { '@id': websiteId },
      publisher: { '@id': organizationId }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbItems
    }
  ]

  const howTo = howToPages[pageData.relativePath]
  if (howTo) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: howTo.name,
      description: howTo.description,
      inLanguage: 'zh-CN',
      mainEntityOfPage: { '@id': `${url}#webpage` },
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step,
        text: step
      }))
    })
  }

  const faq = faqPages[pageData.relativePath]
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: 'zh-CN',
      mainEntityOfPage: { '@id': `${url}#webpage` },
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.name,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.acceptedAnswer
        }
      }))
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

function pageHead(context: TransformContext): HeadConfig[] {
  const { pageData, title, description } = context
  if (pageData.isNotFound || pageData.relativePath === '404.md') {
    return [['meta', { name: 'robots', content: 'noindex,nofollow' }]]
  }

  const url = pageUrl(pageData.relativePath)
  const isHome = pagePath(pageData.relativePath) === '/'

  return [
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:description', content: description }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(structuredData(context))]
  ]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'CCWS 文档',
  description: siteDescription,
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  srcExclude: ['publish/**/*.md'],
  head: [
    ['meta', { name: 'author', content: 'CCWS' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:image', content: siteImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: siteImage }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }]
  ],
  transformHead: pageHead,
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Codex安装', link: '/guide/codex-install' },
      { text: '平台注册', link: '/guide/register' },
      { text: '账号充值', link: '/guide/recharge' },
      { text: 'API Key', link: '/guide/api-key' },
      { text: '高级教程', link: '/guide/config-switch' },
      { text: '疑难解答', link: '/troubleshooting/' }
    ],
    sidebar: [
      {
        text: 'Codex安装',
        items: [
          { text: 'Codex 下载安装', link: '/guide/codex-install' },
          { text: 'Node.js 环境（CLI 可选）', link: '/guide/nodejs-git' }
        ]
      },
      {
        text: '平台注册',
        items: [
          { text: '注册 / 登录', link: '/guide/register' }
        ]
      },
      {
        text: '账号充值',
        items: [
          { text: '充值 / 续费', link: '/guide/recharge' },
          { text: '兑换码兑换', link: '/guide/recharge#兑换码兑换' }
        ]
      },
      {
        text: 'API Key',
        items: [
          { text: '请求地址 / API Key', link: '/guide/api-key' },
          { text: 'Codex 配置', link: '/guide/codex' },
          { text: 'Codex Base URL 怎么填', link: '/guide/codex-base-url' },
          { text: 'Codex API Key 配置', link: '/guide/codex-api-key' }
        ]
      },
      {
        text: '高级教程',
        items: [
          { text: 'CC Switch 使用教程', link: '/guide/config-switch' },
          { text: '添加 CCWS Provider', link: '/guide/cc-switch-provider' },
          { text: 'Codex 生图教程', link: '/guide/codex-image' }
        ]
      },
      {
        text: '疑难解答',
        items: [
          { text: '总览', link: '/troubleshooting/' },
          { text: '安装与启动', link: '/troubleshooting/install' },
          { text: '认证与 API Key', link: '/troubleshooting/auth' },
          { text: '网络与连接', link: '/troubleshooting/network' },
          { text: '请求错误', link: '/troubleshooting/request-error' },
          { text: '401 / 403 / 429 排查', link: '/troubleshooting/codex-error-401-403-429' },
          { text: 'model not found 排查', link: '/troubleshooting/model-not-found' },
          { text: '权限问题', link: '/troubleshooting/permission' },
          { text: '缓存与计费', link: '/troubleshooting/cache-billing' },
          { text: '工具兼容', link: '/troubleshooting/integration' },
          { text: 'Codex CLI', link: '/troubleshooting/codex' },
          { text: '进阶优化', link: '/troubleshooting/advanced' },
          { text: '售后与支持', link: '/guide/support' },
          { text: '商务合作', link: '/guide/business' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新'
    },
    footer: {
      message: 'CCWS 用户使用说明书，帮助你完成 Codex安装、平台注册、账号充值、API Key、高级教程和常见问题排查。',
      copyright: 'Copyright © 2026 CCWS'
    }
  }
})
