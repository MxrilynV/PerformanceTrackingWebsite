const { Server: WebSocketServer } = require('ws');

const http = require('http');
const fs = require('fs');
const port = 4000;
const host = '10.143.127.26';
const path = require('path');
//const { Script } = require('vm');
//const script = require('./script.js');

const server = http.createServer((req, res) => {
    console.log("Request has been Made:" + req.url);

    if (req.url === "/") { 
      console.log("------------Main Page Requested");
        res.setHeader("Content-type", "text/html");
        res.statusCode = 200;
        try {
           const file = fs.readFileSync("HTML/MainPage.html", "utf8");
           res.end(file);
        } catch (err) {
           res.writeHead(500);
           res.end(err.message);
        }
     } 
     else if (req.url === "/PerformanceTrackingResults.html") {
      console.log("------------Results Page Requested");
      const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "PerformanceTrackingResults.html");
      try {
          const file = fs.readFileSync(filePath, "utf8");
          res.setHeader("Content-type", "text/html");
          res.end(file);
      } catch (err) {
          res.writeHead(500);
          res.end(err.message);
      }
      }


      else if (req.url === "/DetailedProjectDescription.html") {
         console.log("------------Results Page Requested");
         const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "DetailedProjectDescription.html");
         try {
             const file = fs.readFileSync(filePath, "utf8");
             res.setHeader("Content-type", "text/html");
             res.end(file);
         } catch (err) {
             res.writeHead(500);
             res.end(err.message);
         }
      }

      else if (req.url === "/DetailedProjectDescription.html") {
         console.log("------------Detailed Project Description Requested");
         const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/Website/HTML", "DetailedProjectDescription.html");
         try {
             const file = fs.readFileSync(filePath, "utf8");
             res.setHeader("Content-type", "text/html");
             res.end(file);
         } catch (err) {
             res.writeHead(500);
             res.end(err.message);
         }
      }

      else if (req.url === "/AdditionalProjectPhotos.html") {
         console.log("------------Photos Requested");
         const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "AdditionalProjectPhotos.html");
         try {
             const file = fs.readFileSync(filePath, "utf8");
             res.setHeader("Content-type", "text/html");
             res.end(file);
         } catch (err) {
             res.writeHead(500);
             res.end(err.message);
         }
      }


     else if (req.url.match(".css$")) {
        const cssPath = path.join(__dirname, '..', 'CSS', 'main_page_styles.css');
        const fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);
     } 
     
     else if (req.url.match('.jpg$')) { //req.url.match(/\.(jpg)$/)
        const fileName = path.basename(req.url);
        const imagePath = path.join(__dirname, '../../', 'Photos', fileName);
        const imageStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        imageStream.on('error', function (err) {
            res.writeHead(404);
            res.end();
        });
        imageStream.pipe(res);
      } 

      else if (req.url.match('/Server/script.js')) {
        console.log("------------Script.js Loaded");
        const filePath = path.join(__dirname, 'script.js');
        try {
            //console.log('inside try for script.js');
            const file = fs.readFileSync(filePath, 'utf8');
            //console.log('file is being read');
            res.setHeader("Content-type", "application/javascript");
            //console.log('setting Header');
            res.end(file);
            //console.log('ending file');
        } catch (err) {
            //console.log('inside catch for script.js');
            res.writeHead(500);
            res.end(err.message);
        }
      }
   
      else {
      console.log("Error: Page not found!")
        fs.readFile('HTML/MainPage.html', function(error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
     }
});

const wss = new WebSocketServer({ port }); //server
//Handle WebSocket connections
    const connections = []
   console.log("WebSocket connection established -- TEST 1");


   ws.on('message', function incoming(data) {
    ws.send('Welcome to the websocket server!');
    console.log("Recieved: " + data);
    ws.send('Received: ' + data);
    updateParameters(data);
    });

  ws.on('close', function close() {   
    console.log('Websocket connection closed');
  });
    // wss.on('connection', (ws) => {
    //     // Handle WebSocket events
            
    //         ws.on('message', (message) => {
    //             console.log('Received message:', message);
    //             connections.push(ws);
                
           
            
    //             console.log("---Sending Message---");

                // const data = message.toString();
                // // if(data){
                // //     const x = data.match(/\d+/g).map(Number);
                // //     const label = data.match(/[a-zA-Z]+/g);
                // //     console.log('Received numbers:', x);
                // //     console.log('Received letters:', label);
                // // }

                // const numbers = data.match(/\d+/g).map(Number);
                // const letters = data.match(/[a-zA-Z]+/g);
                // console.log('Received numbers:', numbers);
                // console.log('Received letters:', letters);



                //script.incomingData(letters, numbers);
                //incomingData(letters, numbers);
                // if(letters == "w"){
                //     console.log("Weight: " + numbers + " lbs");
                // }
                // if(letters == "p"){
                //     console.log("Power: " + numbers + " W");
                // }
                // if(letters == "v"){
                //     console.log("Velocity: " + numbers + " m/s");
                // }

                // if(letters == "d"){
                //     console.log("distance: " + numbers + " ft");
                // }
        
       
                //const number = parseInt(message.toString('ascii'));
                //console.log('Received number:', number);
    


                        // wss.on('message', (message) => {
                        //     console.log('Received message:', message);
                        //     const number = parseInt(message.toString('ascii'));
                        //     console.log('Received number:', number);
                        //   });
                        
                    
                        // Send WebSocket messages
    ws.send('Welcome to the WebSocket server!');
    //ws.close();



// Start the server                                 //School's IP address: 10.143.127.26
server.listen(port, host, (error) => {  //Marilyn's IP address: 10.0.0.181
   if (error) {
      console.log('Something went wrong', error);
   } else {
      console.log('Server is listening on port ' + port);
   }
});