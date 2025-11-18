'use client';

import React, { useState } from 'react';
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
  const DEFAULT_DISPLAY_LIMIT = 20;
  const [showAll, setShowAll] = useState(false);

  const publicationsToDisplay = showAll ? publications : publications.slice(0, DEFAULT_DISPLAY_LIMIT);
  const remainingRows = publications.length - DEFAULT_DISPLAY_LIMIT;

  const handleShowMoreClick = () => {
    setShowAll(true);
  };

  return (
    <div style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '1.1rem', color: 'var(--text-color)' }}>
      <div style={{ marginBottom: '1rem', color: 'var(--text-color-light)' }}>
        # A tibble: {publications.length} x 5
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.5fr 0.5fr 1fr', // Added DOI column
          gap: '0.2rem',
          paddingBottom: '0.2rem',
          borderBottom: '1px solid var(--border-color)',
          fontWeight: 'bold',
        }}
      >
        <div>Title</div>
        <div>Authors</div>
        <div>Journal</div>
        <div>Year</div>
        <div>DOI</div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1.5fr 0.5fr 1fr', // Match header columns
          gap: '0.2rem',
          paddingBottom: '0.2rem',
          borderBottom: '1px solid var(--border-color)',
          color: 'var(--text-color-light)',
          fontSize: '0.8rem',
        }}
      >
        <div>&lt;chr&gt;</div>
        <div>&lt;chr&gt;</div>
        <div>&lt;chr&gt;</div>
        <div>&lt;chr&gt;</div>
        <div>&lt;chr&gt;</div>
      </div>
      {publicationsToDisplay.map((pub, index) => (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1.5fr 0.5fr 1fr', // Match header columns
            gap: '0.2rem',
            paddingTop: '0.2rem',
            paddingBottom: '0.2rem',
            borderBottom: index < publicationsToDisplay.length - 1 ? '1px solid var(--border-color-light)' : 'none',
            alignItems: 'center',
          }}
        >
          <div>{pub.title}</div>
          <div>{pub.authors}</div>
          <div>{pub.journal}</div>
          <div>{pub.year}</div>
          <div>
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
        </div>
      ))}
      {!showAll && remainingRows > 0 && (
        <div
          style={{ marginTop: '1rem', color: 'var(--text-color-light)', cursor: 'pointer' }}
          onClick={handleShowMoreClick}
        >
          # ℹ {remainingRows} more rows
          <br />
          # ℹ Use `print(n = ...)` to see more rows
        </div>
      )}
    </div>
  );
};

export default PublicationList;
