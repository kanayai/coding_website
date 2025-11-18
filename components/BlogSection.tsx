'use client';

import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blogPosts';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <>
      <div className="flex flex-wrap -mx-4 mt-12">
        {posts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4">
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '3rem',
            background: '#252526',
            borderRadius: '8px',
            color: '#858585',
          }}
        >
          <p style={{ fontSize: '1.1rem' }}>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </>
  );
}
