const {userModel , adminModel , courseModel , purcheseModel} = require("./Model");

function createUserRoutes(app){
    
app.post("/users/signup" , async(req, res)=>{
    const firstName = req.body.firstName;
    const email = req.body.email
    const lastName = req.body.lastName;
    const Password = req.body.Password;

    const userExists = await userModel.findOne({
       email:email
    })
    if(!userExists){
        const newuser = await userModel.create({
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:Password
        })
    }else{
        res.status(411).json({
            message:"user with this creadential already exist. "
        })
    }

})
app.post("/users/signin" , async (req, res)=>{
    const email= req.body.email
    const password = req.body.Password;
    
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

app.get("/users/purches"  , (req , res)=>{

})
}

module.exports= {
    createUserRoutes:createUserRoutes
}