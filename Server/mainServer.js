
const startHttpServer = require('./httpServer.js');
const startWebSocketServer = require('./webSocketServer.js');


const httpServer = startHttpServer();
const webSocketServer = startWebSocketServer(httpServer);

webSocketServer.on('upgrade', (request, socket, head) => {
  webSocketServer.handleUpgrade(request, socket, head, (ws) => {
    webSocketServer.emit('connection', ws, request);
  });
});



