const { Router } = require('express');
const adminRouter = Router()
const json = require("jsonwebtoken");
 require('dotenv').config()
const SECRET =process.env.ADMIN_JWT_PASSWORD
// console.log(SECRET);
const { adminModel , courseModel } = require("../Model");
const { adminMiddleware } = require('../middelware/admin');



adminRouter.post("/signup" ,async  (req, res)=>{
    const { firstName , lastName, password , email  } = req.body;
    // try to add thr zod validation
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
    // console.log(userExists)

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
adminRouter.post("/courses",adminMiddleware, async (req, res) => { 
      const createrId = req.adminId;
      const { tittle , description , price , imageUrl } = req.body;

     try{ const courseDetails = await courseModel.create({
        tittle ,
        description,
        price,
        createrId,
        imageUrl
      })
      res.json({
        response: courseDetails
      })
    }catch(err){
        res.status(406).json({
            message:err
        })
    }
})
adminRouter.put("/course" , adminMiddleware , (req, res)=>{
        res.json({
            message:"this end point is to make changes/update in his/her courses"
        })
})
adminRouter.get("/course" , adminMiddleware , (req, res)=>{
    res.json({
        message:"this end point is to get all his/her courses"
    })
})
module.exports={
    adminRouter:adminRouter
}