import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      id: 0,
      messages: ["How are you?", "Explain quantum physics"]
    }
  ]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);

  const handleSubmit = () => {
    if (!input.trim()) return;

    const fakeResponse = `You said: ${input}`;

    // Update current chat
    const updatedHistory = [...history];
    updatedHistory[activeChatIndex].messages.push(input);
    updatedHistory[activeChatIndex].messages.push(fakeResponse);
    setHistory(updatedHistory);

    setInput('');
  };

  const handleSelectHistory = (index) => {
    setActiveChatIndex(index);
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
          {history[activeChatIndex]?.messages.map((msg, idx) => (
            <div key={idx} className={idx % 2 === 0 ? "user-msg" : "bot-response"}>
              {msg}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
