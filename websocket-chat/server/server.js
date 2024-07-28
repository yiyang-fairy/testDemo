const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // 处理收到的消息
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // 广播消息给所有连接的客户端
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // 处理连接关闭
  ws.on("close", () => {
    console.log("Client disconnected");
  });

  // 处理错误
  ws.on("error", (error) => {
    console.error(`WebSocket error: ${error}`);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
