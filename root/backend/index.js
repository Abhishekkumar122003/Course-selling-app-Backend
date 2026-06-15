const express = require('express');
const json = require("jonwebtoken");
const app = express();

const SECRET = "sdnvvj3v";
app.use(express.json());

app.get("/" , (req, res)=>{});

app.post("/signup" , (req, res)=>{
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    
})
app.post("/signin" , (req, res)=>{})

app.post("/purchase" , (req, res)=>{});