const express = require('express');
require('dotenv').config();
// console.log(process.env.MOGO_URL)
// console.log("sasfsd")
const mongoose  = require('mongoose');

const app = express();
app.use(express.json());

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");
const {  userRouter } = require('./routes/users');
const { courseRouter } = require('./routes/courses');
const { adminRouter } = require("./routes/admin")

app.use("/api/v1/users" , userRouter);
app.use("/api/v1/course" , courseRouter)
app.use("/api/v1/admin" , adminRouter);

async function main(){

  await mongoose.connect(process.env.MOGO_URL)

app.listen(3001);

}
main()