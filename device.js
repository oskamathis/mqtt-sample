const uuid = require('node-uuid');
const readLine = require("readline-sync");

const mqtt = require('mqtt');
const client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.device',
});

client.on('connect', function () {
    console.log('device.connected.');
});

const deviceId = uuid.v4();
const event = readLine.question('イベント内容: ');
const time = readLine.question('発火するまでの時間(ミリ秒): ');
const message = `{"event": "${event}", "time": "${time}", "uuid": "${deviceId}"}`;
client.publish(`register`, message);
console.log('device.publish:', message);

client.subscribe(`${deviceId}`, function (err, granted) {
    console.log('device.subscribe:', `${deviceId}`);
});

client.on('message', function (topic, message) {
    console.log('device.on.message', 'topic:', topic, 'message:', message.toString());
});
