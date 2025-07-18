// src/App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '🪐 Welcome! Ask me anything about space.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages,
      { sender: 'user', text: input },
      { sender: 'bot',  text: `🚀 Dummy reply to: "${input}"` }
    ]);
    setInput('');
  };

  return (
    <div className="d-flex flex-column vh-100">
      <header className="top-bar text-center py-3 fw-bold">🌌 Space Chatbot</header>

      {/* MAIN */}
      <div className="container-fluid flex-grow-1 overflow-hidden">
        <div className="row h-100">
          
          {/* SIDEBAR */}
          <aside className="col-12 col-md-4 col-lg-3 p-3 sidebar text-light">
            <h5 className="mb-3">History</h5>
            <ul className="list-group small">
              <li className="list-group-item list-group-item-action">Chandrayaan‑3 touchdown?</li>
              <li className="list-group-item list-group-item-action">Gaganyaan launch date?</li>
            </ul>
          </aside>

          {/* CHAT */}
          <section className="col-12 col-md-8 col-lg-9 d-flex flex-column p-0">
            <div className="flex-grow-1 p-3 overflow-auto messages">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-4 mb-2 shadow-sm message
                              ${m.sender === 'user' ? 'user-msg ms-auto' : 'bot-msg me-auto'}`}>
                  {m.text}
                </div>
              ))}
            </div>

            {/* INPUT BAR */}
            <div className="p-3 border-top d-flex flex-column flex-md-row gap-2">
              <input
                className="form-control"
                placeholder="Type a message…"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button className="btn btn-primary w-100 w-md-auto" onClick={handleSend}>
                Send
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
