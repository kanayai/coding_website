'use client';

import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
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
    <Card
      className="code-card"
      style={{
        borderTop: '4px solid #569cd6',
        height: '100%'
      }}
    >
      <Card.Body className="d-flex flex-column">
        <div>
          <Card.Title style={{
            color: 'var(--accent-r)',
            fontSize: '1.5rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            marginBottom: '0.5rem'
          }}>
            {post.title}
          </Card.Title>

          <div className="text-muted" style={{
            fontSize: '0.9rem',
            marginBottom: '1rem',
            fontStyle: 'italic'
          }}>
            {formatDate(post.date)}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  pill
                  className="blog-tag"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Card.Text className="flex-grow-1">
          {expanded ? (
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          ) : (
            post.excerpt
          )}
        </Card.Text>

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
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
