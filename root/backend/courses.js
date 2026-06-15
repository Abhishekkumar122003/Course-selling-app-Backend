function createCourseRoutes(app){
    
app.post("/course/purchase" , (req, res)=>{});
app.get("/course/preview" , (req, res)=>{
    res.json({
        message:"trying to implement the express Routes"
    })
});
}
module.exports= {
    createCourseRoutes: createCourseRoutes
}