import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getCategories, getPublishedPosts, getTags } from '../lib/posts';
import { absoluteUrl, categoryUrl, postUrl, tagUrl } from '../lib/site';

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://typecho-static.pages.dev');
  const posts = await getPublishedPosts();
  const pages = await getCollection('pages');
  const urls = [
    '/',
    '/category/',
    '/tag/',
    ...posts.map((post) => postUrl(post.data.slug)),
    ...getCategories(posts).map((category) => categoryUrl(category.name)),
    ...getTags(posts).map((tag) => tagUrl(tag.name)),
    ...pages.map((page) => `/${page.data.slug}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${absoluteUrl(url, base)}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
