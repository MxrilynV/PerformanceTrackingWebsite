
const startHttpServer = require('./httpServer.js');
const startWebSocketServer = require('./webSocketServer.js');


const httpServer = startHttpServer();
const webSocketServer = startWebSocketServer(httpServer);

// Handle upgrade requests for websockets
// Event is triggered when a client requests a HTTP upgrade to a websocket one
webSocketServer.on('upgrade', (request, socket, head) => { //incoming http request, socket (IP address & port), head (first packet of the upgraded stream)
  webSocketServer.handleUpgrade(request, socket, head, (ws) => {
    webSocketServer.emit('connection', ws, request);
  });
});



