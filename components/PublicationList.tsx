'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Publication {
  date: string;
  authors: string;
  year: string;
  title: string;
  journal: string;
  link: string;
}

interface PublicationListProps {
  publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  return (
    <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.9rem', color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '1rem', color: 'var(--text-color-light)' }}>
        # A tibble: {publications.length} x 4
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.5fr 0.5fr', // Adjust column widths as needed
          gap: '0.5rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--border-color)',
          fontWeight: 'bold',
        }}
      >
        <div>Title</div>
        <div>Authors</div>
        <div>Journal</div>
        <div>Year</div>
      </div>
      {publications.map((pub, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1.5fr 0.5fr', // Match header columns
            gap: '0.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            borderBottom: index < publications.length - 1 ? '1px solid var(--border-color-light)' : 'none',
            alignItems: 'center',
          }}
        >
          <div>
            {pub.title}
            {' '}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4a9eff',
                textDecoration: 'none',
                fontSize: '0.8rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
            >
              [DOI]
            </a>
          </div>
          <div>{pub.authors}</div>
          <div>{pub.journal}</div>
          <div>{pub.year}</div>
        </div>
      ))}
    </div>
  );
};

export default PublicationList;
