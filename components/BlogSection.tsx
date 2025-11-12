'use client';

import { Row, Col } from 'react-bootstrap';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/data/blogPosts';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <>
      <Row className="g-4" style={{ marginTop: '3rem' }}>
        {posts.map((post) => (
          <Col key={post.id} lg={4} md={6} sm={12}>
            <BlogCard post={post} />
          </Col>
        ))}
      </Row>

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
