import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib/posts';
import { SITE_DESCRIPTION, SITE_TITLE, absoluteUrl, postUrl } from '../lib/site';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPublishedPosts();
  const base = site ?? new URL('https://typecho-static.pages.dev');
  const items = posts
    .map((post) => {
      const url = absoluteUrl(postUrl(post.data.slug), base);
      const description = post.data.description ?? post.data.title;
      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <pubDate>${post.data.date.toUTCString()}</pubDate>
  <description>${escapeXml(description)}</description>
</item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>${escapeXml(SITE_TITLE)}</title>
  <link>${absoluteUrl('/', base)}</link>
  <description>${escapeXml(SITE_DESCRIPTION)}</description>
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
