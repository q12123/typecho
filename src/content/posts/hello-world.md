---
title: "第一篇文章"
slug: "hello-world"
date: "2026-04-26"
updated: "2026-04-26"
description: "用 Astro、Markdown 和 Cloudflare Pages 搭建这个静态博客的第一篇记录。"
category: "default"
tags:
  - Astro
  - Cloudflare
  - 博客
draft: false
---

这里是第一篇文章。这个站点从一开始就保持简单：文章放在 Markdown 文件里，页面由 Astro 构建，最终产物是一组可以直接部署到 Cloudflare Pages 的静态文件。

## 写作方式

以后新增文章时，只需要在 `src/content/posts/` 里新建一个 Markdown 文件：

```markdown
---
title: "新的文章"
slug: "new-post"
date: "2026-04-26"
tags:
  - 随笔
draft: false
---

这里写正文。
```

## 保持轻量

第一版不做后台、不接数据库、不做登录。这样改版和迁移都轻松，构建也会非常快。

> 好的静态博客应该先让写作变得顺手，再慢慢加入真正需要的功能。
