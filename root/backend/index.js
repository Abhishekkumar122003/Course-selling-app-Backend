const express = require('express');
const json = require("jsonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");
const { createUserRoutes } = require('./users');
const { createCourseRoutes } = require('./courses');

const SECRET = "sdnvvj3v";
app.use(express.json());

app.get("/" , (req, res)=>{});
createUserRoutes(app)
createCourseRoutes(app)

app.listen(3001);