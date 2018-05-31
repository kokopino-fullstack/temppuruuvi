const ruuvi = require('node-ruuvitag');

let connectionString = 'HostName=RuuviTagIoTHub.azure-devices.net;DeviceId=MarkonRuuvi;SharedAccessKey=lPQ+ZLrzwzjcVLSE0IzZ0teYr+VTv3iDXcJCfGpZoVY=';

let Mqtt = require('azure-iot-device-mqtt').Mqtt;
let DeviceClient = require('azure-iot-device').Client;
let Message = require('azure-iot-device').Message;

let client = DeviceClient.fromConnectionString(connectionString, Mqtt);

// Print results.
function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ' status: ' + res.constructor.name);
    };
}

// Create a message and send it to the IoT hub every second
/*setInterval(function(){
    // Simulate telemetry.
    var temperature = 20 + (Math.random() * 15);
    var humidity = 60 + (Math.random() * 20);

    // Add the telemetry to the message body.
    var data = JSON.stringify({ temperature: temperature, humidity: humidity });
    var message = new Message(data);

    // Add a custom application property to the message.
    // An IoT hub can filter on these properties without access to the message body.
    message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
    console.log('Sending message: ' + message.getData());

    // Send the message.
    client.sendEvent(message, printResultFor('send'));
}, 1000);
*/

// Main loop

ruuvi.on('found', tag => {
	console.log('Found RuuviTag, id: ' + tag.id);
	tag.on('updated', data => {

		console.log('Got data from RuuviTag ' + tag.id + ':\n' +
            JSON.stringify(data, null, '\t'));
		    data["tagId"] = tag.id;
            let message = new Message(JSON.stringify(data));
            client.sendEvent(message, printResultFor('send'));
	    });
});