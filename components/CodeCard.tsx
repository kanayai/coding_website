'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeCardProps {
  titleCode: string;
  language: 'r' | 'python' | 'yaml' | 'latex';
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
    <div
      className="code-card h-full"
      style={{
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      <div className="p-4">
        <div className="mb-3">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '0',
              background: '#1e1e1e',
              borderRadius: '4px',
              fontSize: '1.2rem',
            }}
            PreTag="div"
            codeTagProps={{ style: { lineHeight: '0.2' } }}
            showLineNumbers={false}
          >
            {titleCode}
          </SyntaxHighlighter>
        </div>
        <p className="text-base text-foreground">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default CodeCard;
