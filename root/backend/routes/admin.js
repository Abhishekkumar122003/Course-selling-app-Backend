const { Router } = require('express');
const adminRouter = Router()
const json = require("jsonwebtoken");
 require('dotenv').config()
const SECRET =process.env.ADMIN_JWT_PASSWORD
// console.log(SECRET);
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
            
        }catch(err){
            console.log("Some error happend during Admin signup" +"\n" + err)
            res.send({
                message: "The ADMIN with given Creadential CREATED. "
            });
        }
    }


})

adminRouter.post("/signin" , async (req, res)=> {
    const {firstName , lastName, email, password} = req.body;
    // console.log(firstName, lastName, email , password);
    const userExists = await adminModel.findOne({
        email:email,
        password:password
    })
    console.log(userExists)

    if(userExists){
         const token = json.sign({
            id:userExists._id
        } , SECRET)
        res.json({
            token:token
        })
    } else{
       res.status(403).json({
            message:"Either the Admin is not exists or the input creadential is not correct."
        })
    }
})
adminRouter.post("/courses", async (req, res) => { 
    
})
module.exports={
    adminRouter:adminRouter
}