const { Router } = require('express')
const {userModel , adminModel , courseModel , purcheseModel} = require("../Model");

const userRouter = Router()

    
userRouter.post("/signup" , async(req, res)=>{
    const firstName = req.body.firstName;
    const email = req.body.email
    const lastName = req.body.lastName;
    const password = req.body.password;
console.log(firstName , lastName)
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

userRouter.get("/users/purches"  , (req , res)=>{

})


module.exports= {
    userRouter:userRouter,
}