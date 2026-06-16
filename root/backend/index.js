const express = require('express');
const json = require("jsonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");
const {  userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/courses');
const { adminRouter } = require("./routes/admin")
const SECRET = "sdnvvj3v";
app.use(express.json());

app.use("/api/v1/users" , userRouter);
app.use("/api/v1/course" , courseRouter)
app.get("/" , (req, res)=>{});


app.listen(3001);