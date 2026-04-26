import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://site-001-typecho-static.pages.dev');
  return new Response(`User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml', base)}
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
