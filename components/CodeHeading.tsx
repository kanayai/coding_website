'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeHeadingProps {
  code: string;
  language: 'r' | 'python' | 'yaml' | 'latex';
  subtitle?: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
}

const CodeHeading: React.FC<CodeHeadingProps> = ({
  code,
  language,
  subtitle,
  size = 'h2'
}) => {
  const fontSize = {
    h1: '3.9rem',
    h2: '3.15rem',
    h3: '2.775rem',
    h4: '2.4rem'
  };

  return (
    <div className="code-heading mb-4">
      <div className="syntax-highlight" style={{ fontSize: fontSize[size] }}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '0',
            background: 'transparent',
            fontSize: 'inherit',
            lineHeight: '0.1'
          }}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      {subtitle && (
        <p className="mt-2 mb-0" style={{
          color: '#858585',
          fontSize: '0.95rem',
          fontStyle: 'italic'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default CodeHeading;
