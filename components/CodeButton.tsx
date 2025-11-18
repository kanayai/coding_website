'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeButtonProps {
  code: string;
  language: 'r' | 'python' | 'yaml' | 'latex';
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

  const buttonContent = (
    <div className="syntax-highlight">
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '0',
                  background: 'transparent',
                  fontSize: '1.2rem',
                  display: 'inline-block',
                }}
                PreTag="div"
                codeTagProps={{ style: { lineHeight: '0.2' } }}
                showLineNumbers={false}
              >
                {code}
              </SyntaxHighlighter>    </div>
  );

  const classNames = `code-button code-button-${variant}`;

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
    >
      {buttonContent}
    </button>
  );
};

export default CodeButton;
