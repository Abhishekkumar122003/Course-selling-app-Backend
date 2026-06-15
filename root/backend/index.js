const express = require('express');
const json = require("jsonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");
const { createCourseRoutes } = require('./courses');
const { createUserRoutes } = require('./users');

const SECRET = "sdnvvj3v";
app.use(express.json());

app.get("/" , (req, res)=>{
    res.json({
        t:"everythin working properlly"
    })
});
createUserRoutes(app);
createCourseRoutes(app)

app.listen(3000);