'use client';
import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      aria-pressed={isDark}
      title={isDark ? 'Switch to light' : 'Switch to dark'}
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        // Sun icon
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      ) : (
        // Moon icon
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}