const { Router } = require('express')
const {userModel   , purchaseModel } = require("../Model");
const json = require("jsonwebtoken");
const { UserMiddleware } = require('../middelware/user');
const SECRET = process.env.example;

const userRouter = Router()

    
userRouter.post("/signup" , async(req, res)=>{
    const {firstName , lastName, email, password} = req.body;
console.log(firstName , lastName )  

// try to add zod validation
// put this inside  try catch block
    const userExists = await userModel.findOne({
       email:email
    })
    console.log(email); 
    console.log(userExists);
    if(!userExists){
        const newuser = await userModel.create({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password
        })

        res.send({
            response:"you are signuped. "
        })
    }else{
        res.status(411).json({
            message:"user with this creadential already exist. "
        })
    }

})
userRouter.post("/signin" , async (req, res)=>{
    const email= req.body.email
    const password = req.body.password;
    
    const userExists = await userModel.findOne({
        email:email,
        password:password
    })
    if(!userExists){
        res.status(409).json({
            message:"Either the given Cradential is wrong or the User does not SIGNUP"
        })
    }else{
        const token = json.sign({
            id: userExists._id
        } , SECRET);

        res.json({
            token:token
        })
    }


})

userRouter.get("/purches"  , UserMiddleware , (req , res)=>{
    const userId = req.userId
    const purchaseCourse = await purchaseModel.find({
        ownerId:userId
    })
    if(purchaseCourse){
        const CourseData = await purchaseModel.find({
            _id: 
        })
    }
        res.send({message:"On working "})
})


module.exports= {
    userRouter:userRouter,
}