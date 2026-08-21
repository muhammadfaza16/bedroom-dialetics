import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Bedroom Dialectics · Muhammad Faza',
    description: 'Personal notes, engineering reflections, and first-principles observations.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
