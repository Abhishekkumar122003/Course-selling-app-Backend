// for schema of our DataBase
const mongoose  = require('mongoose');
mongoose.connect("")

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

const purchaseSchema = new Schema({
    ownerId:ObjectId,
    courseId:[ObjectId]
})

const userModel = mongoose.model("users" , userSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const courseModel = mongoose.model("courses" , courseSchema);
const purchaseModel = mongoose.model("purchase" , purchaseSchema);

model.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}