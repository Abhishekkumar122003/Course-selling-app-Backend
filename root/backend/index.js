const express = require('express');
const json = require("jonwebtoken");
const app = express();

const {userModel , adminModel , courseModel , purcheseModel} = require("./Model")

const SECRET = "sdnvvj3v";
app.use(express.json());

app.get("/" , (req, res)=>{});

app.post("/signup" , async(req, res)=>{
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
            password:userPassword
        })
    }else{
        res.status(411).json({
            message:"user with this creadential already exist. "
        })
    }

})
app.post("/signin" , async (req, res)=>{
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

app.post("/purchase" , (req, res)=>{});

app