// app/chatbot/page.js
"use client";

import React, { useState } from "react";
import "../styles/chatbot.css"; // kalau pakai styling terpisah

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();
      const aiMessage = { role: "ai", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Gagal mendapatkan respon dari AI." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Chatbot AI</h1>
      <div className="chat-display">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.role}`}>
            <span>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Tanyakan sesuatu..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Kirim</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
