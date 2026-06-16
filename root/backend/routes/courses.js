const {userModel , adminModel , courseModel , purcheseModel} = require("../Model");
const { Routers }= require('express')

const courseRouter = Routers()

    
courseRouter.post("/course/purchase" , (req, res)=>{});
courseRouter.get("/course/preview" , (req, res)=>{
    res.json({
        message:"trying to implement the express Routes"
    })
});

module.exports= {
    courseRouter: courseRouter
}