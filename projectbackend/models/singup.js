var mongoose = require('mongoose');
var signupSchema = new mongoose.Schema({
    userId:String,
    name: String,
    emailID: {type:String,unique:true,required:true},
    password: String,
    address: String,
    phonenumber: Number
    
});
module.exports=mongoose.model('signup',signupSchema);