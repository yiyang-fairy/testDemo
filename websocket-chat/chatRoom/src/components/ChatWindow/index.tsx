import React, { useState } from "react";
import "./index.css";

interface Message {
  user: string;
  text: string;
  from: string;
}

interface ChatWindowProps {
  currentUser: string;
  selectedUser: string;
  messages: Message[];
  sendMessage: (message: string, toUser: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  currentUser,
  selectedUser,
  messages,
  sendMessage,
}) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(input, selectedUser);
      setInput("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">{selectedUser}</div>
      <div className="chat-content">
        {messages
          .filter(
            (message) =>
              message.user === selectedUser || message.from === selectedUser
          )
          .map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.from === currentUser ? "sent" : "received"
              }`}
            >
              <strong>{message.from}</strong>: {message.text}
            </div>
          ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入信息区域"
        />
        <button onClick={handleSendMessage}>发送</button>
      </div>
    </div>
  );
};

export default ChatWindow;
