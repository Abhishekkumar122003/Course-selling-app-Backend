const { Router } = require('express');
const adminRouter = Router()
const json = require("jsonwebtoken");
const SECRET = "sdnvvj3v";

const { adminModel , courseModel } = require("../Model")



adminRouter.post("/signup" ,async  (req, res)=>{
    const { firstName , lastName, password , email  } = req.body;
    
    const userExist = await adminModel.findOne({
        email:email,
        firstName:firstName,
        lastName:lastName
    })
    if(userExist){
        res.json({
            message:"Admin with the given creadential already exist"
        })
    }else{
        try{
            await adminModel.create({
                email:email,
                firstName:firstName,
                lastName:lastName,
                password:password
            })
            res.send({
                message: "The ADMIN with given Creadential CREATED. "
            })
        }catch(err){
            console.log("Some error happend during Admin signup" +"\n" + err)
        }
    }


})
module.exports={
    adminRouter:adminRouter
}