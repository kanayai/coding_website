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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {publications.map((pub, index) => {
        // Create code-like representation of the publication
        const publicationCode = `# Publication ${index + 1}
title = "${pub.title} [DOI: ${pub.link}]"
authors = "${pub.authors}"
journal = "${pub.journal}"
year = ${pub.year}`;

        return (
          <div
            key={index}
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                fontSize: '0.9rem',
                borderRadius: '8px',
              }}
              showLineNumbers={true}
            >
              {publicationCode}
            </SyntaxHighlighter>
          </div>
        );
      })}
    </div>
  );
};

export default PublicationList;