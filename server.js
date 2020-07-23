const mqtt = require('mqtt');
const client = mqtt.connect({
    host: 'localhost',
    port: 1883,
    clientId: 'mqtt.server',
});

client.on('connect', function () {
    console.log('server.connected.');
});

client.subscribe('register', function (err, granted) {
    console.log('server.subscribed.');
});

client.on('message', function (topic, message) {
    console.log('server.on.message', 'topic:', topic, 'message:', message.toString());
    const json = JSON.parse(message);

    setTimeout(function () {
        client.publish(`${json.uuid}`, json.event);
        console.log('server.publish:', json.event);
    }, parseInt(json.time));
});

