// for schema of our DataBase
const mongoose  = require('mongoose');
//Username :abhishek801503gupta
// Password : mongooseBD
mongoose.connect("mongodb+srv://abhishek801503gupta:<db_password>@cluster0.ml6dk8w.mongodb.net/")

const Schema = mongoose.Schema;
const ObjectId = mongoose.type.ObjectId;

const userSchema = new Schema({
    email:{type: String , unique: true},
    firstName: String,
    lastName:String,
    password:String
})


const adminSchema = new Schema({
    email:{type: String , unique:true},
    firstName:String,
    lastName:String,
    password:String
})

const courseSchema = new Schema({
    title: String,
    description: String,
    createrId:ObjectId,
    imageUrl:String,
    price:Number
})

const purchase = new Schema({
    ownerId:ObjectId,
    courseId:[ObjectId]
})