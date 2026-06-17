const { Router } = require('express');
const adminRouter = Router()
const json = require("jsonwebtoken");
const SECRET = "sdnvvj3v";

const { adminModel , courseModel } = require("../Model")



adminRouter.post("/admin" , (req, res)=>{})