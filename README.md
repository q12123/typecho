# Typecho Static

站群静态博客起始模板，基于 Astro + Markdown + Cloudflare Pages。

## 站点编号

当前模板编号：

```text
site-001
```

编号定义在 `src/lib/site.ts`：

```ts
export const SITE_ID = 'site-001';
```

后续复制新站点时，至少调整：

- `SITE_ID`
- `SITE_TITLE`
- `SITE_DESCRIPTION`
- `astro.config.mjs` 里的 `site`
- Cloudflare Pages 项目名

当前 Cloudflare Pages 项目：

```text
site-001-typecho-static
```

## 内容维护

文章放在：

```text
src/content/posts/*.md
```

独立页面放在：

```text
src/content/pages/*.md
```

文章 frontmatter 示例：

```markdown
---
title: "文章标题"
slug: "article-slug"
date: "2026-04-26"
updated: "2026-04-26"
description: "文章摘要"
category: "default"
tags:
  - Astro
  - 博客
draft: false
---
```

## 本地开发

```powershell
npm install
npm run dev
npm run build
```

## Cloudflare Pages

自动部署配置：

```text
Build command: npm run build
Build output directory: dist
Production branch: main
Node version: 22 或 24
```

公开路由：

```text
/
/archives/:slug/
/category/
/category/:slug/
/tag/
/tag/:slug/
/about/
/feed.xml
/sitemap.xml
/robots.txt
```
