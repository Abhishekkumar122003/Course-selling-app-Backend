const { Router } = require('express');
const adminRouter = Router()
const json = require("jsonwebtoken");
const SECRET = "sdnvvj3v";

const { adminModel , courseModel } = require("../Model")



adminRouter.post("/signup" , (req, res)=>{
    const { firstName , lastName, password , email  } = req.body;
    console.log(firstName +"\n"+ lastName , email , password)
    res.json({
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
    })
})
module.export={
    adminRouter:adminRouter
}