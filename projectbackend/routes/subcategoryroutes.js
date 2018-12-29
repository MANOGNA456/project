var express = require('express');
var _ = require('underscore');

var subcategory = require('../models/subcategory');


var router = express.Router();
// router.use(function(req, res, next) { //allow cross origin requests
//     res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

router.post('/subcategorydetails',function(req,res){
    subcategory.create({
        
        subcategory_id:req.body.subcategory_id,
   itemList : req.body.itemList,
   
   
    },function(err,details){
        if(err){
            res.send(err);
        }else{
            res.json({
                "message":"added",details
            })
        }
    })
})

router.get('/getsubcategorydetails',function(req,res){
    subcategory.find(function(err,getdetails){
        if(err){
            res.send(err);
        }else{
            res.json({
                message :getdetails,
                category_id:getdetails.category_id
            })
        }
    })
})

router.get('/getdetailsbyid/:subcategory_id',function(req,res){
    var subcategory_id = req.params.subcategory_id;
    subcategory.findOne({'subcategory_id': subcategory_id},function(err,details){
        if(err){
            res.send(err);
        }else{
            res.json({
                message:details,
                // subcategory_id: details.subcategory_id
            })
        }
    })
})

// router.delete('/deleteproductbyid/:product_id',function(req,res){
    
// })


   
   

module.exports = router;