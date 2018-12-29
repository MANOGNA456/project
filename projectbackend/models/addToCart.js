var mongoose = require('mongoose');
var addToCartSchema =new mongoose.Schema({
   
  userId : String,
  
  product_details: Object
// image: String,   
});
module.exports=mongoose.model('addToCart',addToCartSchema);