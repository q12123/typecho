import { getCollection, type CollectionEntry } from 'astro:content';
import { taxonomySlug } from './site';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => data.draft !== true);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getCategories(posts: Post[]) {
  const counts = new Map<string, number>();
  posts.forEach((post) => {
    const category = post.data.category;
    if (!category) return;
    counts.set(category, (counts.get(category) ?? 0) + 1);
  });
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: taxonomySlug(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

export function getTags(posts: Post[]) {
  const counts = new Map<string, number>();
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
  });
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: taxonomySlug(name), count }))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

export function postsByCategory(posts: Post[], slug: string) {
  return posts.filter((post) => post.data.category && taxonomySlug(post.data.category) === slug);
}

export function postsByTag(posts: Post[], slug: string) {
  return posts.filter((post) => post.data.tags.some((tag) => taxonomySlug(tag) === slug));
}
