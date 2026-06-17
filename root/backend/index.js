const express = require('express');
console.log(process.env.MOGO_URL)
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

  await mongoose.connect("mongodb+srv://abhishek801503gupta:mongooseBD@cluster0.ml6dk8w.mongodb.net/CourseSelling_Backend")

app.listen(3001);

}
// main()