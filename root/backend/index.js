const express = require('express');
const json = require("jsonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");
const {  userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/courses');

const SECRET = "sdnvvj3v";
app.use(express.json());

app.use("/users" , userRouter);
app.use("/course" , courseRouter)
app.get("/" , (req, res)=>{});


app.listen(3001);