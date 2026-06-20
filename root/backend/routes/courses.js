const { UserMiddleware } = require("../middelware/user");
const {userModel , adminModel , courseModel , purchaseModel} = require("../Model");
const { Router }= require('express')

// const { courseModel } = require("../Model")
const courseRouter = Router()

    
courseRouter.post("/purchase" ,UserMiddleware ,async (req, res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId

    // I have to add logic to check is the user pays for it yet or not
    const course = await purchaseModel.create({
        ownerId:userId,
        courseId
    })

    res.json({
        message:"you've successfully bought the course"
    })
});
courseRouter.get("/preview" , async (req, res)=>{
    const course = await 
});

module.exports= {
    courseRouter: courseRouter
}