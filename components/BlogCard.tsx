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
      className="code-card mb-4"
      style={{
        borderTop: '4px solid #569cd6',
        background: '#252526'
      }}
    >
      <Card.Body>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1rem'
        }}>
          <Card.Title style={{
            color: '#4ec9b0',
            fontSize: '1.5rem',
            fontFamily: 'var(--font-geist-mono)',
            marginBottom: '0.5rem'
          }}>
            {post.title}
          </Card.Title>
        </div>

        <div style={{
          color: '#858585',
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
                bg="secondary"
                style={{
                  marginRight: '0.5rem',
                  background: '#3e3e42',
                  color: '#4ec9b0',
                  fontFamily: 'var(--font-geist-mono)',
                  fontWeight: 'normal'
                }}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <Card.Text style={{
          color: '#d4d4d4',
          marginBottom: '1rem'
        }}>
          {expanded ? post.content : post.excerpt}
        </Card.Text>

        {expanded && post.codeSnippet && (
          <div style={{ marginTop: '1.5rem' }}>
            <SyntaxHighlighter
              language={post.codeSnippet.language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: '#1e1e1e',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}
              showLineNumbers={true}
            >
              {post.codeSnippet.code}
            </SyntaxHighlighter>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1.5rem',
            background: expanded ? '#3e3e42' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '6px',
            color: '#d4d4d4',
            fontFamily: 'var(--font-geist-mono)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
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
