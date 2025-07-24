import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([
    "How are you?",
    "Translate to French: Hello",
    "What is AI?"
  ]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setHistory([...history, input]);
    setResponse(`You said: ${input}`);
    setInput('');
  };

  const handleSelectHistory = (index) => {
    const item = history[index];
    setInput(item);
    setResponse(`You selected: ${item}`);
  };

  return (
    <div className="app-container">
      <Sidebar
        currentTheme={theme}
        setTheme={setTheme}
        history={history}
        onSelect={handleSelectHistory}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="chat-container">
        <div className="chat-messages">
          {response && <div className="bot-response">{response}</div>}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
