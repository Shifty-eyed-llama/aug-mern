const express = require('express');
const app = express();

const sockets = require("socket.io");

const server = app.listen(8000, () => { console.log("Sockets on 8000")});

const io = sockets(server);

io.on("connection", socket => {

    console.log(socket.id);
    console.log("A client was connected");

    socket.on("message-from-client", (data) => {
        console.log(data);
       socket.broadcast.emit("update-number", {"number": data.number})
    });

    // socket.emit
    // sends to just one client

    // io.emit
    // sends to all

    // socket.broadcast
    // sends to all clients but the one sending the initial event
})