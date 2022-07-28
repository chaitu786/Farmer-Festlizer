const express=require('express')
const mongoose = require("mongoose");
const cors=require("cors")
const dotenv = require("dotenv").config();
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(
    cors({
      origin: true,
      credentials: true,
      sameSite: "none",
    })
  );

app.get('/',(req,res)=>{res.send('hello')})

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