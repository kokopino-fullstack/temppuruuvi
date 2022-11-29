const ruuvi = require('node-ruuvitag');

// Replace this with the connectionID for the Azure IOT gw registered device

let connectionString = 'HostName=RuuviTagIoTHub.azure-devices.net;DeviceId=MarkonRuuvi;SharedAccessKey=lPQ+ZLrzwzjcVLSE0IzZ0teYr+VTv3iDXcJCfGpZoVY=';

let Mqtt = require('azure-iot-device-mqtt').Mqtt;
let DeviceClient = require('azure-iot-device').Client;
let Message = require('azure-iot-device').Message;

let client = DeviceClient.fromConnectionString(connectionString, Mqtt);
let counter = 0;

// Print results.

function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
    };
}

// Main loop

ruuvi.on('found', tag => {
	console.log('Found RuuviTag, id: ' + tag.id);
	tag.on('updated', data => {

		console.log('Got data point with counter ' + counter + 'from RuuviTag ' + tag.id + ':\n' +
            JSON.stringify(data, null, '\t'));
		    data["tagId"] = tag.id;
            let message = new Message(JSON.stringify(data));
            counter = counter + 1;
            if(counter % 50 === 0) {
                console.log("Counter is " + counter + ", sending this set");
                client.sendEvent(message, printResultFor('send'));
            }
	    });
});
