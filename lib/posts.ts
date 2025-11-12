import fs from 'fs';
import path from 'path';
import { load } from 'cheerio';
import { BlogPost } from '@/data/blogPosts';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostsData(): Promise<BlogPost[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.html'));

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".html" from file name to get id
    const id = fileName.replace(/\.html$/, '');

    // Read html file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use cheerio to parse the post
    const $ = load(fileContents);

    // Extract metadata
    const title = $('head title').text();
    const date = $('head meta[name="dcterms.date"]').attr('content') || '';
    const excerpt = $('head meta[name="description"]').attr('content') || '';
    const tags = ($('head meta[name="keywords"]').attr('content') || '').split(',').map(tag => tag.trim()).filter(tag => tag);

    // Extract content
    const contentHtml = $('#quarto-content').html() || '';

    const post: BlogPost = {
      id,
      title,
      date,
      excerpt,
      contentHtml,
      tags,
    };

    return post;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
