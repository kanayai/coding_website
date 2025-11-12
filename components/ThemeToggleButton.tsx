'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import CodeButton from './CodeButton';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // We need to ensure this component only renders on the client, where localStorage is available.
  // The ThemeProvider already handles the initial state, so we can safely render the button.
  if (!theme) {
    return null; // Or a placeholder
  }

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      <CodeButton
        code={theme === 'light' ? "set_theme('dark')" : "set_theme('light')"}
        language="python"
        variant="outline"
        aria-label="Toggle theme"
      />
    </div>
  );
};

export default ThemeToggleButton;
