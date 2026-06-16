const {userModel , adminModel , courseModel , purcheseModel} = require("../Model");
const { Router }= require('express')

// const { courseModel } = require("../Model")
const courseRouter = Router()

    
courseRouter.post("/purchase" , (req, res)=>{
    res.send({
        message:"you don't purches and courses yet"
    })
});
courseRouter.get("/preview" , (req, res)=>{
    res.json({
        message:"we don't have any courses to sell yet"
    })
});

module.exports= {
    courseRouter: courseRouter
}