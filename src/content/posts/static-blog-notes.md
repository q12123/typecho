---
title: "静态博客的第一版边界"
slug: "static-blog-notes"
date: "2026-04-25"
description: "记录第一版只保留首页、文章页、分类、标签、关于页和基础订阅能力。"
category: "default"
tags:
  - Markdown
  - 静态站点
updated: "2026-04-26"
draft: false
---

第一版的目标不是把所有功能一次做完，而是先形成稳定的内容发布路径。

图片可以放在 `public/uploads/images/`，正文里直接使用绝对路径引用：

```markdown
![图片说明](/uploads/images/example.jpg)
```

页面会自动生成 RSS、sitemap 和 robots 文件，适合接入 Cloudflare Pages 的自动构建流程。

## 部署测试

这是一段用于验证 Cloudflare Pages 部署链路的测试更新。更新文章后重新运行构建，确认首页、文章页、RSS 和 sitemap 都能同步反映最新内容。

## 自动部署测试

这一次更新用于验证 GitHub 自动部署流程：本地修改 Markdown 后提交并推送到 `main` 分支，Cloudflare Pages 会自动拉取代码、执行 `npm run build`，并把新的 `dist` 产物发布到 `site-001-typecho-static.pages.dev`。
