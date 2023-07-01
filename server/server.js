const express=require('express')
const mongoose = require("mongoose");
const cors=require("cors")
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const userRouter=require("./Routes/User.Routes");
const session = require('express-session');
const { productRouter } = require('./Routes/Product.Routes');
const cartRouter = require('./Routes/Cart.Routes');
const postsRouter = require('./Routes/MyPosts.Routes');
const app=express()
const server = require('http').Server(app)
var io = require('socket.io')(server)
app.enable('trust proxy')
app.set("trust proxy", 1); // trust first proxy
app.use(
  cors({
    origin: true,
    credentials: true,
    sameSite: "none",
  })
);

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      secure: true, // required for cookies to work on HTTPS
      httpOnly: false,
      sameSite: 'none'
    }
}))

app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{res.send('hello')})
app.use("/static",express.static("./uploads"))
app.use("/chat",express.static("src/Public"))

app.use("/",userRouter)
app.use("/",productRouter)
app.use("/",cartRouter)
app.use("/",postsRouter)

// websockets
io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);

  //Handle chat event
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  });
});

const PORT = process.env.PORT || 8080;
const mongoDB = process.env.MongoAtlas;

server.listen(PORT,()=> { 
    mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful to server");
    })
    .catch((err) => {
      console.log(err, "Failed to connect to server");
    });
  console.log(`Listening on Port ${PORT}`);
})