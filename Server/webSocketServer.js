// SERVER SIDE
//File Name: webSocketServer.js

const {ws_port} = require('./networkConfig.js');
const updateParameters = require('./script.js');
const WebSocket = require('ws');


//const port = 8080;

const startWebSocketServer = (httpServer) => {
  const wss = new WebSocket.Server({server: httpServer});
  
  //define the webSocketServer variable to hold the WebSocket server instance
  const webSocketServer = wss;
  
  wss.on('connection', function connection(ws) {
    console.log('Websocket connection established');
  
    ws.on('message', function incoming(data) {
      ws.send('Welcome to the websocket server!');
      console.log('Received: ' + data);
      ws.send('Received: ' + data);
      const receivedData = data; // Data received from WebSocket client
      console.log('data type:' + data.type);
      const message = {
        type: "dataUpdate", 
        data: receivedData 
      };

      webSocketServer.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
        console.log('Sent: ' + JSON.stringify(message));
      }
    });
  });


  ws.on('close', function close() {
      console.log('Websocket connection closed');
    });
  });
  
  console.log(`WebSocket server started on port ${httpServer.address().port}`);
  return wss;
};

module.exports = startWebSocketServer;