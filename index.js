require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello World !");
})

app.get('/twitter',(req,res)=>{
    res.send('chanchalrajput.com');
})

app.get('/login',(req,res)=>{
    res.send("Welcome to login page")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai or Code</h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on port ${port}`);   
})
