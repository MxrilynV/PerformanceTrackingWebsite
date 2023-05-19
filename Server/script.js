// //CLIENT SIDE
// const WebSocket = require('ws');
// const host = 'ws://10.143.127.26:4000'
// const socket = new WebSocket(host);


// socket.addEventListener('open', function (event) {
//   console.log('WebSocket connection opened');
//   socket.send('Hello Server!');

// });

// socket.addEventListener('message', function (event) {
//   console.log('Message from server ', event.data);
//   updateParameters(event.data);

// });
//const {ws_port} = require('./networkConfig.js');
//const socket = new WebSocket(global_port);



function updateTime() {
  //const timeElement = document.getElementById('time');
  //const currentTime = new Date().toLocaleTimeString();
  //timeElement.textContent = currentTime;
}

updateTime();
setInterval(updateTime, 1000);

function updateParameters(message){
  
  const data = message.toString();
  const numbers = data.match(/\d+/g);

  if (numbers) {
    const parsedNumbers = numbers.map(Number);
    console.log('Received numbers:', parsedNumbers);

    // Do something with the parsedNumbers

    const letters = data.match(/[a-zA-Z]+/g);
    console.log('Received letters:', letters);

    //updateHTML(numbers, letters);

  } else {
    console.log('No numbers received');
  }
}

// const updateHTML = (numbers, letters) => {
//   letters = letters[0].toLowerCase();
//   switch (letters) {
//     case 'w':
//       console.log(numbers + "lb");
//       const lettersElement = document.getElementById('w');
//       console.log(lettersElement);
//       // lettersElement.textContent = 'Received Number: ' + numbers.join(', ');
//       console.log(letters);
//       break;
//     case 'p':
//       console.log(letters);
//       break;
//     case 't':
//       console.log(letters);
//       break;
//     case 'l':
//       console.log(letters);
//       break;
//     case 'r':
//       // Handle 'r' case
//       break;
//     default:
//       console.log('Invalid!');
//   }
// };


//module.exports = updateParameters;




// const wsc = new WebSocket('10.143.127.26:8080');

// // WebSocket event handler for connection established
// wsc.onopen = () => {
//   console.log('WebSocket connection established -- Test 2');
// };

// // WebSocket event handler for receiving messages
// wsc.onmessage = (event) => {
//   const data = JSON.parse(event.data);
//   //const data2 = message.toString();
//   // if(data){
//   //     const x = data.match(/\d+/g).map(Number);
//   //     const label = data.match(/[a-zA-Z]+/g);
//   //     console.log('Received numbers:', x);
//   //     console.log('Received letters:', label);
//   // }

 
//   const letters = data.match(/[a-zA-Z]+/g);
//   const numbers = data.match(/\d+/g).map(Number);
//   console.log('Received letters:', letters);
//   console.log('Received numbers:', numbers);

  

//   // Update the webpage with the received data
//   updatePage(letters, numbers);
// };

// // Function to update the webpage with the received data
// function updatePage(label, x) {
//   // Update specific elements on the webpage with the data
//   // For example, if you have an element with id "time", you can update its content as follows:
//   const element = document.getElementById(label);
//   element.textContent = x;

//   // Update other elements as needed
// }

// // Example usage: Send a message to the WebSocket server
// function sendMessage(message) {
//   socket.send(message);
// }

// console.log("------------updating time");

//   function updateTime() {
//     const timeElement = document.getElementById('time');
//     const currentTime = new Date().toLocaleTimeString();
//     timeElement.textContent = currentTime;
//   }

//   updateTime();
//   setInterval(updateTime, 1000);



//   // function incomingData(label, x){
//   //   const element = document.getElementById(label);
//   //   const currentLabel = x;
//   //   element.textContent = currentLabel;
    

//   function incomingData(label, x){
//       if(label == document.getElementById()){
//         const element = document.getElementById(label);
//         const currentLabel = x;
//         element = currentLabel;
//       }
//     // if(label == "s"){
//     //   console.log("Speed: " + numbers + " W");
//     // }
//     // if(label == "d"){
//     //   console.log("Distance: " + numbers + " m/s");
//     // }

//     // if(label == "l"){
//     //   console.log("Left Foot Force: " + numbers + " ft");
//     // }

//     // if(label == "r"){ 
//     //   console.log("Right Foot Force: " + numbers + " ft");
//     // }
//     }

//   module.exports = {
//     incomingData: incomingData
//   };
