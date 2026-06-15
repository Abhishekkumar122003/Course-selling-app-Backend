const express = require('express');
const json = require("jonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model")

const SECRET = "sdnvvj3v";
app.use(express.json());

app.get("/" , (req, res)=>{});


app.listen(3000);