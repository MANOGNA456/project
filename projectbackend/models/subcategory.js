var mongoose = require('mongoose');
var categorySchema =new mongoose.Schema({
   
    subcategory_id: String,
   
   itemList: Array
   
});
module.exports=mongoose.model('subCategory',categorySchema);