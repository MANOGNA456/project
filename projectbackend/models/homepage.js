var mongoose = require('mongoose');
var homePageSchema = new mongoose.Schema({
    imagePath:String,
    name: String,
    price: Number,
    discount: String
    
});
module.exports=mongoose.model('homepageimagedetails',homePageSchema);