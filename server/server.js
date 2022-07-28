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
    saveUninitialized: true
}))

app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{res.send('hello')})

app.use("/",userRouter)
app.use("/",productRouter)
app.use("/",cartRouter)
app.use("/",postsRouter)

const PORT = process.env.PORT || 8080;
const mongoDB = process.env.MongoAtlas;

app.listen(PORT,()=> { 
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