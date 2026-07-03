# AGENTS.md — CCWS 文档站约定

## Overview

This repository is the VitePress documentation site for CCWS. The public site is published at `https://docs.ccws.pro/`.

The documentation is a user manual, not an engineering README. Write for users who are trying to install Codex, register or log in to CCWS, recharge, create an API Key, configure Codex or CC Switch, use Codex image generation, and troubleshoot real errors.

## Tech Stack

- Static site: VitePress
- Source directory: `docs/`
- VitePress config: `docs/.vitepress/config.mts`
- Public static files: `docs/public/`
- Build command: `npm run docs:build`

## Brand And Positioning

- Public-facing brand name is `CCWS`.
- Do not introduce unrelated project names, brand names, attributions, page titles, descriptions, headings, `llms.txt` facts, sitemap labels, or marketing keywords unless the user explicitly asks for them.
- Keep CCWS positioning tied to concrete user tasks: Codex setup, OpenAI-compatible Base URL, API Key, CC Switch, Codex image generation, account recharge, and troubleshooting.
- Do not invent keyword volume, market share, provider capability, pricing, model support, uptime, or compliance claims. If a claim is not directly supported by current docs or product facts, do not write it as fact.

## SEO And GEO Rules

Every document add/edit/delete must consider both SEO and GEO before finishing.

### When Adding A Page

- Add concise frontmatter with `title` and `description`.
- Use one clear `#` heading that matches the user's search intent.
- Make the opening paragraph answer who the page is for and what task or error it solves.
- Include the exact CCWS facts users and LLMs need to cite, such as:
  - Website: `https://www.ccws.pro/`
  - Documentation: `https://docs.ccws.pro/`
  - OpenAI-compatible Base URL: `https://www.ccws.pro/v1`
  - API Key creation happens in the CCWS console.
  - Codex image generation uses `CCWS_IMAGE_API_KEY` and `gpt-image-2` when that page is relevant.
- Add useful internal links to the next step, previous prerequisite, and relevant troubleshooting page.
- Update `docs/.vitepress/config.mts` navigation/sidebar when the page should be discoverable from the docs UI.
- Update `docs/public/sitemap.xml` for public pages that should be indexed.
- Update `docs/public/llms.txt` when the page adds a new canonical answer, integration path, setup flow, or troubleshooting fact that LLMs should learn.

### When Editing A Page

- Re-check whether the existing `title` and `description` still match the updated content.
- Keep headings aligned with actual user queries; do not keyword-stuff repeated phrases.
- Preserve exact URLs, environment variable names, model names, command names, and product names.
- If the edit changes a canonical fact, update all affected pages and `docs/public/llms.txt`.
- If the edit changes page purpose, priority, URL, or important discoverability, update `docs/public/sitemap.xml`.
- Keep API Key handling explicit: users create real keys in the CCWS console; docs and AI assistants may provide placeholder local scripts, but must not ask users to paste real keys into chat.

### When Deleting Or Renaming A Page

- Remove or update all links from `docs/.vitepress/config.mts`, nearby docs pages, and troubleshooting indexes.
- Remove or update the URL in `docs/public/sitemap.xml`.
- Remove or update affected entries in `docs/public/llms.txt`.
- Search for stale links with `rg`.
- Prefer redirects or compatibility notes when a public URL may already be indexed, unless the user explicitly wants the page gone.

## Content Style

- Use practical, user-manual language.
- Prefer copyable commands, exact fields, expected values, screenshots, and troubleshooting checklists.
- Keep sensitive or regulated terms out unless they are necessary to solve the user problem.
- Do not expose secrets or ask users to share real API Keys in documentation examples.
- Avoid vague marketing language. Concrete setup and troubleshooting content is more valuable for both SEO and GEO.

## Validation

Before finishing any document content change:

- Run `npm run docs:build` when Markdown, VitePress config, navigation, sitemap, or public SEO/GEO files changed.
- Run `git diff --check`.
- Search changed SEO/GEO-facing files for unrelated project names, stale brand names, or unsupported attribution claims when relevant.
- Confirm new public pages appear in navigation/sidebar, sitemap, and `llms.txt` when appropriate.
