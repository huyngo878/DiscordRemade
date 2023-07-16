const express = require('express');
const app = express();
const socket.io = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000);
const io = socket.listen(expressServer);

io.on('connection', (socket) => {
    console.log(socket.id, 'a user connected');

    socket.io('newMessageToServer', (dataFromClient) => {
        console.log("data", dataFromClient);
        io.emit('newMessageToServer', {text:dataFromClient.text});
    });
});