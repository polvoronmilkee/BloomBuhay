"use client";

import { useState, useRef, useEffect } from "react";
import { getResponse } from "@/lib/data";

interface Message {
  type: "bot" | "user";
  text: string;
}

interface AteBBScreenProps {
  onNavigate: (tab: string) => void;
}

export function AteBBScreen({ onNavigate }: AteBBScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi, Maria! I'm Ate BB, your virtual companion 💕 Huwag mahiyang magtanong! Ask me anything about your pregnancy journey, and I'll do my best to help!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: getResponse(text) },
      ]);
    }, 700);
  };

  const quickQuestions = [
    "Is back pain normal? 😣",
    "What to eat? 🥦",
    "See doctor when? 🏥",
    "Count kicks? 👶",
    "Is nausea normal? 🤢",
  ];

  return (
    <section className="screen active" id="screen-ate-bb">
      <div className="screen-header">
        <div className="screen-header-row">
          <button className="back-btn" onClick={() => onNavigate("home")}>
            ←
          </button>
          <div
            className="ate-bb-avatar"
            style={{ width: "42px", height: "42px", overflow: "hidden" }}
          >
            <img
              src="/atebb-avatar-icon-192x192.png"
              alt="Ate BB"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div className="screen-header-title">Ate BB</div>
            <div className="screen-header-sub">Your pregnancy companion</div>
          </div>
        </div>
      </div>
      <div className="chat-container" id="chat-container">
        <div className="chat-messages" id="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.type}`}>
              {msg.type === "bot" && (
                <div className="msg-avatar" style={{ overflow: "hidden" }}>
                  <img
                    src="/atebb-avatar-icon-192x192.png"
                    alt="Ate BB"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div className="msg-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="quick-qs">
          <div className="quick-qs-label">Quick questions:</div>
          <div className="quick-qs-row">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                className="quick-q-btn"
                onClick={() => sendMessage(q.replace(/ [😣🥦🏥👶🤢]$/, ""))}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
        <div className="chat-input-area">
          <input
            className="chat-input"
            placeholder="Magtanong kay Ate BB..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(inputValue)}
          />
          <button className="send-btn" onClick={() => sendMessage(inputValue)}>
            ➤
          </button>
        </div>
      </div>
    </section>
  );
}
