'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeButtonProps {
  code: string;
  language: 'r' | 'python';
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CodeButton: React.FC<CodeButtonProps> = ({
  code,
  language,
  onClick,
  href,
  variant = 'primary'
}) => {
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none'
    },
    secondary: {
      background: 'linear-gradient(135deg, #4ec9b0 0%, #3a9e89 100%)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      border: '2px solid #4ec9b0'
    }
  };

  const buttonContent = (
    <div className="syntax-highlight">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '0.5rem 1rem',
          background: 'transparent',
          fontSize: '0.9rem',
          display: 'inline-block'
        }}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );

  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ...variantStyles[variant]
  };

  const hoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
  };

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className="code-button"
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyle);
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      className="code-button"
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyle);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {buttonContent}
    </button>
  );
};

export default CodeButton;
