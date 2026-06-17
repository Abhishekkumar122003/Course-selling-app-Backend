const express = require('express');
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

  await mongoose.connect("")

app.listen(3001);

}
main()