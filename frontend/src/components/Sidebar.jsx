import React from 'react';
import './Sidebar.css';

function Sidebar({ currentTheme, setTheme, history, onSelect, sidebarOpen, setSidebarOpen }) {
  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <>
  {/* Toggle Button (fixed outside sidebar) */}
  <button
    className="toggle-btn"
    onClick={() => setSidebarOpen(!sidebarOpen)}
  >
    {sidebarOpen ? '×' : '☰'}
  </button>

  {/* Sidebar */}
  <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
    {/* Header Row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h4>Estelle</h4>
      {/* Remove this close button if you're already using the fixed toggle */}
      {/* <button onClick={() => setSidebarOpen(false)}>×</button> */}
    </div>

    {/* Theme Toggle */}
    <button onClick={toggleTheme}>
      {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>

    <hr />
    <h5>History</h5>
    <ul>
      {history.map((item, index) => (
        <li key={index} onClick={() => onSelect(index)}>
          Chat {index + 1}
        </li>
      ))}
    </ul>
  </div>
</>

  );
}

export default Sidebar;
