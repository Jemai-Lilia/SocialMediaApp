const express = require('express');
require('dotenv').config()


const app = express();

const mongoose=require('mongoose')


app.get('/', ( req , res )=>{
    res.send('Hello Social Media Application')
})

// Connect the app with mongodb using mongoose
mongoose
.connect('mongodb://127.0.0.1:27017/socialmediaapp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "))
db.once("open", ()=>{
    console.log("database connected successfully .... ")
})

// create server
app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`);
});