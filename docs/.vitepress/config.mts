import { defineConfig } from 'vitepress'
import type { HeadConfig, TransformContext } from 'vitepress'

const siteUrl = 'https://docs.ccws.pro'
const siteTitle = 'ChatGPT中转站使用说明书'
const siteDescription = 'ChatGPT中转站使用说明书：ChatGPT（Codex）安装、账号注册、充值、API Key、高级教程与疑难解答'
const siteImage = `${siteUrl}/images/home-hero.png`
const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

type SchemaNode = Record<string, unknown>

const howToPages: Record<string, { name: string; description: string; steps: string[] }> = {
  'guide/api-key.md': {
    name: '在控制台创建 API Key',
    description: '在控制台创建并复制 API Key，供 ChatGPT（Codex）连接使用。',
    steps: ['登录控制台', '进入 API Key 或密钥管理页面', '点击创建 Key', '复制以 sk- 开头的 API Key']
  },
  'guide/connect.md': {
    name: '配置 ChatGPT（Codex）',
    description: '把请求地址和 API Key 填进 ChatGPT（Codex）（推荐 CC Switch 方式），发测试消息确认配置完成。',
    steps: ['准备 API Key，并按中转站网址加 /v1 或网站上专门说明的 API 地址写出请求地址', '用 CC Switch 添加自定义 Provider 并填写地址和 Key', '启用 Provider 并重启 ChatGPT', '发送测试消息确认 ChatGPT 正常回复']
  },
  'guide/config-switch.md': {
    name: '在 CC Switch 中添加自定义 Provider',
    description: '安装 CC Switch，添加自定义 ChatGPT（Codex）Provider，并填写中转站网址、请求地址和 API Key。',
    steps: ['安装并打开 CC Switch', '进入 Codex 配置', '添加自定义 Provider', '填写中转站网址、API Key 和请求地址', '启用 Provider 并重启 ChatGPT']
  },
  'guide/codex-image.md': {
    name: '安装 ChatGPT（Codex）生图技能',
    description: '配置 CCWS_IMAGE_API_KEY，并在 ChatGPT（Codex）中使用支持 gpt-image-2 的 Key 进行生图。',
    steps: ['在控制台创建支持 gpt-image-2 的生图 API Key', '在本机配置 CCWS_IMAGE_API_KEY', '下载并解压安装包', '运行安装器', '重启 ChatGPT 并发送生图测试任务']
  }
}

const faqPages: Record<string, { name: string; acceptedAnswer: string }[]> = {}

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
      name: siteTitle,
      url: `${siteUrl}/`,
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
  title: siteTitle,
  description: siteDescription,
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  srcExclude: ['publish/**/*.md'],
  head: [
    ['meta', { name: 'author', content: siteTitle }],
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
      { text: '快速开始', link: '/guide/quickstart' },
      { text: '配置教程', link: '/guide/connect' },
      { text: '高级教程', link: '/guide/config-switch' },
      { text: '疑难解答', link: '/troubleshooting/' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '任务步骤一览', link: '/guide/quickstart' }
        ]
      },
      {
        text: '入门配置',
        items: [
          // 固定 6 章，未经明确要求不要增删或调序。
          { text: '安装 ChatGPT', link: '/guide/codex-install' },
          { text: '注册 / 登录', link: '/guide/register' },
          { text: '充值 / 续费', link: '/guide/recharge' },
          { text: '创建 API Key', link: '/guide/api-key' },
          { text: '配置 ChatGPT', link: '/guide/connect' },
          { text: '生图功能（可选）', link: '/guide/codex-image' }
        ]
      },
      {
        text: '高级教程',
        items: [
          { text: 'CC Switch 使用教程', link: '/guide/config-switch' },
          { text: 'Node.js 环境（CLI 用户）', link: '/guide/nodejs-git' }
        ]
      },
      {
        text: '疑难解答',
        items: [
          { text: '总览', link: '/troubleshooting/' },
          {
            text: '报错排查',
            items: [
              { text: '网络与连接', link: '/troubleshooting/network' },
              { text: '请求首字慢', link: '/troubleshooting/slow-response' }
            ]
          },
          {
            text: '支持与商务',
            items: [
              { text: '售后与支持', link: '/guide/support' },
              { text: '商务合作', link: '/guide/business' }
            ]
          }
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
      message: 'ChatGPT中转站使用说明书，帮你搞定 ChatGPT 安装、账号注册、充值、API Key、高级教程和常见问题排查。',
      copyright: 'Copyright © 2026'
    }
  }
})
