import React, { useState, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import UserList from "./components/UserList";
import "./App.css";

interface Message {
  user: string;
  text: string;
  from: string; // 用于区分消息来源
}

const App: React.FC = () => {
  // 从 URL 中获取当前用户
  const urlParams = new URLSearchParams(window.location.search);
  const currentUser = urlParams.get("currentUser") || "用户0"; // 默认用户是 "用户0"

  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [users] = useState<string[]>([
    "游客1",
    "游客2",
    "游客3",
    "游客4",
    "用户0",
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };
    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };
    setSocket(newSocket);

    newSocket.onmessage = async (event) => {
      const data = await event.data.text();
      try {
        const newMessage: Message = JSON.parse(data);
        console.log("Received:", newMessage); // 添加日志以调试消息接收
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSelectUser = (user: string) => {
    setSelectedUser(user);
  };

  const sendMessage = (message: string, toUser: string) => {
    const newMessage: Message = {
      user: toUser,
      text: message,
      from: currentUser,
    };
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(newMessage));
    } else {
      console.error("WebSocket is not open");
    }
  };

  return (
    <div className="app">
      <UserList users={users} onSelectUser={handleSelectUser} />
      {selectedUser && (
        <ChatWindow
          currentUser={currentUser}
          selectedUser={selectedUser}
          messages={messages}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
};

export default App;
