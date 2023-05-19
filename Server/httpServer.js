//const http = require('http');

//File Name: httpServer.js

const {http_port, global_IP} = require('./networkConfig.js');
const express = require('express');
const app = express();
//const port = 3000;
const fs = require('fs');
const path = require('path');


const host = '10.143.127.26'; //Marilyn's IP address: 10.0.0.181 || School's IP address: 10.143.127.26

//const { Script } = require('vm');
//const script = require('./script.js');

const startHttpServer = () => {
    
    app.get('/', (req, res) => {
        //ROUTE HANDLING ---------------------------------------------------------------
        console.log("Request has been Made:" + req.url);
    


        
        app.get('/PerformanceTrackingResults.html', (req, res) => {
            //console.log("-----------Requested: Performance Tracking - " + req.url);
            //const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML/", "PerformanceTrackingResults.html");
            const filePath = path.join(__dirname, '../HTML/PerformanceTrackingResults.html');
            try {
            const file = fs.readFileSync(filePath, "utf8");
            res.setHeader("Content-type", "text/html");
            res.end(file);
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
            }
                
        });


    
       
        // else if (req.url === "/PerformanceTrackingResults.html") {
        //     console.log("-----------Requested: Performance Tracking - " + req.url);
        //     //const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML/", "PerformanceTrackingResults.html");
        //     const filePath = path.join(__dirname, './../HTML/PerformanceTrackingResults.html');
        //     try {
        //     const file = fs.readFileSync(filePath, "utf8");
        //     res.setHeader("Content-type", "text/html");
        //     res.end(file);
        //     } catch (err) {
        //         res.writeHead(500);
        //         res.end(err.message);
        //     }
        // }

        app.get('/DetailedProjectDescription.html', (req, res) => {
            // else if (req.url === "/DetailedProjectDescription.html") {
            //console.log("------------Results Page Requested");
            const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "DetailedProjectDescription.html");
            try {
                const file = fs.readFileSync(filePath, "utf8");
                res.setHeader("Content-type", "text/html");
                res.end(file);
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
            }
        });

        app.get('/AdditionalProjectPhotos.html', (req, res) => {
            //else if (req.url === "/AdditionalProjectPhotos.html") {
            //console.log("------------Photos Requested");
            const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "AdditionalProjectPhotos.html");
            try {
                const file = fs.readFileSync(filePath, "utf8");
                res.setHeader("Content-type", "text/html");
                res.end(file);
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
            }   
        });

        app.get('/CSS/main_page_styles.css', (req, res) => {
            // else if (req.url === "/CSS/main_page_styles.css") {
            //console.log("------------CSS Loaded");
            const cssPath = path.join(__dirname, '..', 'CSS', 'main_page_styles.css');
            //console.log('cssPath:', cssPath);
            const fileStream = fs.createReadStream(cssPath, "UTF-8");
            res.writeHead(200, { "Content-Type": "text/css" });
            fileStream.pipe(res);
        });
    
        app.get('/CSS/PerformanceTrackingResults.css', (req, res) => {
            //else if (req.url.match('.jpg$')) { //req.url.match(/\.(jpg)$/)
            const fileName = path.basename(req.url);
            const imagePath = path.join(__dirname, '../../', 'Photos', fileName);
            const imageStream = fs.createReadStream(imagePath);
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            imageStream.on('error', function (err) {
                res.writeHead(404);
                res.end();
            });
            imageStream.pipe(res);
        });

    
        app.get('/CSS/AdditionalProjectPhotos.css', (req, res) => {
            //else if (req.url.match('/Server/script.js')) {
            //console.log("------------Script.js Loaded");
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
        });

        app.get('/*.jpg', (req, res) => {
            const fileName = path.basename(req.url);
            const imagePath = path.join(__dirname, '../', 'Photos', fileName);
            //console.log('imagePath:', imagePath + '\n'  + 'fileName:', fileName);
            const imageStream = fs.createReadStream(imagePath);
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            imageStream.on('error', function (err) {
                if (!res.headersSent) {
                    res.writeHead(404);
                }
                res.end();
            });
            imageStream.pipe(res);
        });

        app.get('/MainPage.html', (req, res) => {


            // else if (req.url === "/MainPage.html") {
            //console.log("------------Main Page Requested");
            const filePath = path.join(__dirname, '../HTML', 'MainPage.html');
           // const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "MainPage.html");
            try {
                const file = fs.readFileSync(filePath, "utf8");
                res.setHeader("Content-type", "text/html");
                res.end(file);
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
            }
        });
        //else {
        if (req.url === "/") { 
            console.log("-----------Requested: " + req.url);
            res.setHeader("Content-type", "text/html");
            res.statusCode = 200;
            try {
                const file = fs.readFileSync("./HTML/MainPage.html", "utf8");
                res.end(file);
                console.log("-----------Sent: " + req.url);
            } catch (err) {
                res.writeHead(500);
                res.end(err.message);
                }
        }

        else {
            console.log("Error: Page not found!")
            fs.readFile('./HTML/MainPage.html', function(error, data) {
            if (error) {
               res.writeHead(404);
               res.write('Error: File Not Found');
            } else {
               res.write(data);
            }
           res.end();
            });
        }


        //------------------------------------------------------------------------------------
   });

    app.use((req, res, next) => {
        console.log('Requested Path:', req.url);
        next();
    });


    const httpServer = app.listen(http_port, () => {
    console.log('HTTP server started on port', http_port);
    });
    
    return httpServer;
};

  

module.exports = startHttpServer;
  
  //module.exports = startHttpServer;
// // Start the server                                 
// server.listen(port, host, (error) => { 
//     if (error) {
//        console.log('Something went wrong', error);
//     } else {
//        console.log('Server is listening on port ' + port);
//     }
//  });

// const server = http.createServer((req, res) => {
//     console.log("Request has been Made:" + req.url);

//     if (req.url === "/") { 
//       console.log("------------Main Page Requested");
//         res.setHeader("Content-type", "text/html");
//         res.statusCode = 200;
//         try {
//            const file = fs.readFileSync("HTML/MainPage.html", "utf8");
//            res.end(file);
//         } catch (err) {
//            res.writeHead(500);
//            res.end(err.message);
//         }
//      } 
//      else if (req.url === "/PerformanceTrackingResults.html") {
//       console.log("------------Results Page Requested");
//       const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "PerformanceTrackingResults.html");
//       try {
//           const file = fs.readFileSync(filePath, "utf8");
//           res.setHeader("Content-type", "text/html");
//           res.end(file);
//       } catch (err) {
//           res.writeHead(500);
//           res.end(err.message);
//       }
//       }


//       else if (req.url === "/DetailedProjectDescription.html") {
//          console.log("------------Results Page Requested");
//          const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "DetailedProjectDescription.html");
//          try {
//              const file = fs.readFileSync(filePath, "utf8");
//              res.setHeader("Content-type", "text/html");
//              res.end(file);
//          } catch (err) {
//              res.writeHead(500);
//              res.end(err.message);
//          }
//       }

//       else if (req.url === "/DetailedProjectDescription.html") {
//          console.log("------------Detailed Project Description Requested");
//          const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/Website/HTML", "DetailedProjectDescription.html");
//          try {
//              const file = fs.readFileSync(filePath, "utf8");
//              res.setHeader("Content-type", "text/html");
//              res.end(file);
//          } catch (err) {
//              res.writeHead(500);
//              res.end(err.message);
//          }
//       }

//       else if (req.url === "/AdditionalProjectPhotos.html") {
//          console.log("------------Photos Requested");
//          const filePath = path.join("C:/Users/Marilyn Vazquez/Documents/School/Spring 2023/ENGR 697/WebsiteEdits/HTML", "AdditionalProjectPhotos.html");
//          try {
//              const file = fs.readFileSync(filePath, "utf8");
//              res.setHeader("Content-type", "text/html");
//              res.end(file);
//          } catch (err) {
//              res.writeHead(500);
//              res.end(err.message);
//          }
//       }


//      else if (req.url.match(".css$")) {
//         const cssPath = path.join(__dirname, '..', 'CSS', 'main_page_styles.css');
//         const fileStream = fs.createReadStream(cssPath, "UTF-8");
//         res.writeHead(200, { "Content-Type": "text/css" });
//         fileStream.pipe(res);
//      } 
     
//      else if (req.url.match('.jpg$')) { //req.url.match(/\.(jpg)$/)
//         const fileName = path.basename(req.url);
//         const imagePath = path.join(__dirname, '../../', 'Photos', fileName);
//         const imageStream = fs.createReadStream(imagePath);
//         res.writeHead(200, { "Content-Type": "image/jpeg" });
//         imageStream.on('error', function (err) {
//             res.writeHead(404);
//             res.end();
//         });
//         imageStream.pipe(res);
//       } 

//       else if (req.url.match('/Server/script.js')) {
//         console.log("------------Script.js Loaded");
//         const filePath = path.join(__dirname, 'script.js');
//         try {
//             //console.log('inside try for script.js');
//             const file = fs.readFileSync(filePath, 'utf8');
//             //console.log('file is being read');
//             res.setHeader("Content-type", "application/javascript");
//             //console.log('setting Header');
//             res.end(file);
//             //console.log('ending file');
//         } catch (err) {
//             //console.log('inside catch for script.js');
//             res.writeHead(500);
//             res.end(err.message);
//         }
//       }
   
//       else {
//       console.log("Error: Page not found!")
//         fs.readFile('HTML/MainPage.html', function(error, data) {
//             if (error) {
//                 res.writeHead(404);
//                 res.write('Error: File Not Found');
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//      }
// });


