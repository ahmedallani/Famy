const express = require('express')
const app = express()
const port = 3000
const portS = process.env.PORT || 4001;
const http = require("http");
const mongoose=require("mongoose")
const socketIo = require("socket.io");
const { random } = require('./Game/game');
const game=require("./Game/game")
const dbF=require("./db/schema")


app.use(express.static(__dirname + '/client/dist'));

app.use(express.json())

mongoose.connect("mongodb+srv://famy:2222@cluster0.ye5b9.gcp.mongodb.net/famy?retryWrites=true&w=majority", { useNewUrlParser: true, 
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

app.post("/register", (req, res) => {
dbF.registerUser(req.body,res)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.post("/position",(req,res)=>{
  console.log(req.body)
  res.send()
})

app.post('/selectChar',(req,res)=>{
  console.log(req.body)
dbF.updateskin(req.body.id,req.body.currentskin,res)
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
  socket.on("id",data=>{
    console.log(data)
  })
  interval = setInterval(() => getApiAndEmit(socket), 200);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {

  socket.emit("Simulationdata", "test");
};

server.listen(portS, () => console.log(`Listening on port ${portS}`));

////////////////////////////   Game 

var matrix = Array.from(Array(26), (x) => Array(29).fill(0));

console.table(matrix)

var randomSpawn = function(id,res){
  var x=game.random("x")
  var y=game.random("y")
  if(matrix[x][y]===0){
     matrix[x][y]=id
     res.send({place:"done"})
     console.log()
  }else{
    randomSpawn(id,res)
  }
  
}





// dbF.id.save((result,err)=>{ // if you want to set the accounts id to 0 uncomment this
//   console.log(result,err)
// })