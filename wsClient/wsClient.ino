/*
 * WebSocketClient.ino
 *
 *  Created on: 24.05.2015
 *
 */

#include <Arduino.h>

#include <WiFi.h>
#include <WiFiMulti.h>
#include <WiFiClientSecure.h>

#include <WebSocketsClient.h>


WiFiMulti WiFiMulti;
WebSocketsClient webSocket;

#define USE_SERIAL Serial1


String rf = "Right Foot Force is 425345";
String lf = "Left Foot Force is 353545 ";
String v = "Velocity is 9.8 m/s^2";
String d = "Distance traveled is 1000 meters";
String tr = "Time spent rowing is 20 min";

String rfMessage = "{\"type\":\"rightFootForce\",\"rightFootForce\":\"" + String(rf) + "\"}";
String lfMessage = "{\"type\":\"leftFootForce\",\"leftFootForce\":\"" + String(lf) + "\"}";
String vMessage = "{\"type\":\"velocity\",\"velocity\":\"" + String(v) + "\"}";
String dMessage = "{\"type\":\"distance\",\"distance\":\"" + String(d) + "\"}";
String trMessage = "{\"type\":\"timeRowing\",\"timeRowing\":\"" + String(tr) + "\"}";


void hexdump(const void *mem, uint32_t len, uint8_t cols = 16) {
	const uint8_t* src = (const uint8_t*) mem;
	USE_SERIAL.printf("\n[HEXDUMP] Address: 0x%08X len: 0x%X (%d)", (ptrdiff_t)src, len, len);
	for(uint32_t i = 0; i < len; i++) {
		if(i % cols == 0) {
			USE_SERIAL.printf("\n[0x%08X] 0x%08X: ", (ptrdiff_t)src, i);
		}
		USE_SERIAL.printf("%02X ", *src);
		src++;
	}
	USE_SERIAL.printf("\n");
}

void webSocketEvent(WStype_t type, uint8_t * payload, size_t length) {

	switch(type) {
		case WStype_DISCONNECTED:
			USE_SERIAL.printf("[WSc] Disconnected!\n");
			break;
		case WStype_CONNECTED:
			USE_SERIAL.printf("[WSc] Connected to url: %s\n", payload);

			// send message to server when Connected
			webSocket.sendTXT(rfMessage);
      webSocket.sendTXT(lfMessage);
      webSocket.sendTXT(vMessage);
      webSocket.sendTXT(dMessage);
      webSocket.sendTXT(trMessage);
     
			break;
		case WStype_TEXT:
		case WStype_BIN:
		case WStype_ERROR:			
		case WStype_FRAGMENT_TEXT_START:
		case WStype_FRAGMENT_BIN_START:
		case WStype_FRAGMENT:
		case WStype_FRAGMENT_FIN:
			break;
	}

}

void setup() {
	// USE_SERIAL.begin(921600);
	USE_SERIAL.begin(115200);

	//Serial.setDebugOutput(true);
	USE_SERIAL.setDebugOutput(true);

	USE_SERIAL.println();
	USE_SERIAL.println();
	USE_SERIAL.println();

	for(uint8_t t = 4; t > 0; t--) {
		USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
		USE_SERIAL.flush();
		delay(1000);
	}

	WiFiMulti.addAP("wifi", "12345678");

	//WiFi.disconnect();
	while(WiFiMulti.run() != WL_CONNECTED) {
		delay(100);
	}

	// server address, port and URL
	//webSocket.begin("10.143.127.26", 4001, "/"); //School IP
  webSocket.begin("10.0.0.181", 4001, "/");  //Home IP

	// event handler
	webSocket.onEvent(webSocketEvent);

	// use HTTP Basic Authorization this is optional remove if not needed
	webSocket.setAuthorization("user", "Password");

	// try ever 5000 again if connection has failed
	webSocket.setReconnectInterval(5000);

}

void loop() {
	webSocket.loop();
  while(1){
      webSocket.sendTXT(rfMessage);
      webSocket.sendTXT(lfMessage);
      webSocket.sendTXT(vMessage);
      webSocket.sendTXT(dMessage);
      webSocket.sendTXT(trMessage);
      
  }
}
