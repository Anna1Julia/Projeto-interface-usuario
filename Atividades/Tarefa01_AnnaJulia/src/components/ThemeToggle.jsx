import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle-container">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        style={{
          backgroundColor: darkMode ? 'var(--card-bg)' : 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;