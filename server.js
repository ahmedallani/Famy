const express = require('express')
const app = express()
const port = 3000
const portS = process.env.PORT || 4001;
const http = require("http");
const mongoose = require("mongoose")
const socketIo = require("socket.io");

app.use(express.static(__dirname + '/client/dist'));

app.use(express.json())

mongoose.connect("mongodb+srv://famy:2222@cluster0.m7mng.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', function() {
    console.log('mongoose connection error');
});

db.once('open', function() {
    console.log('mongoose connected successfully');
});



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/shop', (req,res) => {
    res.send()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




//////////////////////Socket Io
const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

server.listen(portS, () => console.log(`Listening on port ${portS}`));