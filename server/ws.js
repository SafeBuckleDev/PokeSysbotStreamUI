import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5001 });

console.log("WebSocket server running on ws://localhost:5001");

wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (data) => {
        // Broadcast incoming messages to all clients
        for (const client of wss.clients) {
            if (client.readyState === ws.OPEN) {
                client.send(data.toString());
            }
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
