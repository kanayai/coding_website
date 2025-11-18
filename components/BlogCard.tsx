'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className="code-card"
      style={{
        borderTop: '4px solid #569cd6',
        height: '100%'
      }}
    >
      <div className="flex flex-col h-full p-4">
        <div>
          <h3 className="text-accent-r text-xl font-jetbrains-mono mb-2">
            {post.title}
          </h3>

          <div className="text-gray-500 text-sm mb-4 italic">
            {formatDate(post.date)}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="blog-tag inline-block px-2 py-1 rounded-full text-xs font-normal mr-2"
                >
                  #{tag}
                  </span>
              ))}
            </div>
          )}
        </div>

        <p className="flex-grow text-base text-foreground">
          {expanded ? (
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : (
            post.excerpt
          )}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto"
          style={{
            padding: '0.5rem 1.5rem',
            border: 'none',
            borderRadius: '6px',
            fontFamily: 'var(--font-jetbrains-mono)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            background: expanded ? 'var(--border-color)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'var(--foreground)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {expanded ? '// Collapse' : '// Read More'}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
