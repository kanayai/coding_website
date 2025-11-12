'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeCardProps {
  titleCode: string;
  language: 'r' | 'python';
  description: string;
  children?: React.ReactNode;
  accentColor?: string;
}

const CodeCard: React.FC<CodeCardProps> = ({
  titleCode,
  language,
  description,
  children,
  accentColor = '#4ec9b0'
}) => {
  return (
    <Card
      className="code-card h-100"
      style={{
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      <Card.Body>
        <div className="mb-3">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '0.75rem',
              background: '#1e1e1e',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            showLineNumbers={false}
          >
            {titleCode}
          </SyntaxHighlighter>
        </div>
        <Card.Text>
          {description}
        </Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CodeCard;
