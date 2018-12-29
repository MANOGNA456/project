//schema for counters collection
var mongoose = require('mongoose');//using mongoose to schema 
var Schema = mongoose.Schema; //for creating a model we use schema

var counters = new Schema ({
    _id: {type: String, required: true},
    sequence_value: { type: Number, default: 1 }
},{
    collection : 'counters'
});


 // Auto Increment Function for Getting user Id
 counters.statics.getUserId = function getUserId(callback){
     console.log("fergth")
    return this.findOneAndUpdate({"_id" : "userId"},{$inc: {sequence_value : +1 }}, function(err, id) {
       // console.log(err)
        console.log(id,"id")
         if (err){
             return callback(err);
         }
         else{
             // res.send(id);
             console.log(id);
             
             return callback(null,id);
         }
     });
 }

module.exports = mongoose.model('counters',counters);
