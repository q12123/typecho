export const SITE_ID = 'site-001';
export const SITE_TITLE = 'Typecho Static';
export const SITE_DESCRIPTION = '一个由 Astro 与 Markdown 驱动的轻量静态博客。';
export const DEFAULT_OG_IMAGE = '/favicon.svg';

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function taxonomySlug(value: string) {
  return value.trim().toLowerCase().replace(/[\\/#?]+/g, '-').replace(/\s+/g, '-');
}

export function postUrl(slug: string) {
  return `/archives/${slug}/`;
}

export function categoryUrl(category: string) {
  return `/category/${taxonomySlug(category)}/`;
}

export function tagUrl(tag: string) {
  return `/tag/${taxonomySlug(tag)}/`;
}

export function absoluteUrl(path: string, site?: URL) {
  const base = site ?? new URL('https://site-001-typecho-static.pages.dev');
  return new URL(path, base).toString();
}
