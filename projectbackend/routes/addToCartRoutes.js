var express = require('express');
var _ = require('underscore');
var app = express();
var addToCart = require('../models/addToCart');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var router = express.Router();


router.post('/addtocart',function(req,res){
    console.log(req.body.product_details)
    addToCart.create({       
   userId:  req.body.userId,
   product_details:req.body.product_details
    },function(err,details){
        if(err){

            res.send(err);
        }else{
            res.json({
                "message":details
            })
        }
    })
})

router.get('/getcartproducts',function(req,res){
    addToCart.find({},function(err,getdetails){
        if(err){
            res.send(err);
        }else{
            res.json({
                message :getdetails,
                id:getdetails.id
            })
        }
    })
})

router.get('/getcartproductsbyid/:userId',function(req,res){
    var userId = req.params.userId;
    addToCart.find({'userId': userId},function(err,details){
        if(err){
            res.send(err);
        }else{
            res.json({
                message:details,
                // userId: details.userId
            })
        }
    })
})
   
// router.put('/updatedetails/:userId', function(req,res){
//     var userId = req.params.userId;
//     addToCart.updateOne({'userId': userId},{$pull:{"product_details":{"product_id": "PD00002"}}},
//     function(err,data){
//         if(err){
//             res.json({
//                 message:error
//             })
//         }else{
//             res.json({
//                 message: "updated"

//             })
//         }
//     })
// })

router.delete('/deleteproduct/:userId/:product_id',function(req,res){
    var product_id = req.params.product_id;
    var userId = req.params.userId;
    addToCart.remove({'userId' : userId,'product_details.product_id': product_id},function(err,details){
        if(err){
            res.send(err)
        }else{
            res.json({
                success:true,
                message: "deleted"
            })
        }
    })
})
   

module.exports = router;