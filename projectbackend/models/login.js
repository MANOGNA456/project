var mongoose = require('mongoose');
var loginSchema =new mongoose.Schema({
   
    emailID: String,
    password: String,
    
});
module.exports=mongoose.model('login',loginSchema);