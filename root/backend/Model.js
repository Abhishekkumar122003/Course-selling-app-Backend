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

const Admin = new Schema({

})
