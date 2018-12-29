
var express = require('express');
var _ = require('underscore');
var Signup = require('../models/singup');
var router = express.Router();
var counter = require('../counters');



router.post('/postdetails',function(req,res){
    
        // Counters Id Auto Increment
        counter.getUserId(function (err, userId) {
//console.log(userId,'wert')
            if (err) {
                res.status(500).json({success : false, message : "Error in Auto Incrementing the Customer Id"});
            }
            else if (userId.sequence_value != null) {
                var padd = ('00000000' + userId.sequence_value).slice(-9);
                var padding = ('U' + padd) //project id increment
    Signup.create({
        userId:padding,
        name: req.body.name,
        emailID: req.body.emailID,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        address: req.body.address
    },function(err,data){
        console.log(data,"hwvflhcdwjxhlsk")
        if(err){
            console.log("error")
            res.send(err);
        }else {
            console.log("sucess")
            res.send({
               " message": "added"}
            )
        }
    })
        }
        })
    });




router.get('/getdetails',function(req,res){
    Signup.find({},function(err,getdetails){
        if(err){
            res.send(err)
        }else{
            res.json({
                success:true,
                message: getdetails
            })
        }
    })
})

router.get('/getdetailsbyid/:userId',function(req,res){
    var userId = req.params.userId;
    console.log(userId)
    Signup.findOne({'userId':userId},function(err,data){
        if(err){
            res.send(err)
        }else{
            res.json({
                message:data
            })
        }
    })
})

// router.put('/updatedetails/:userId',function(req,res){
//     var userId = req.params.userId;
//     Signup.update({'userId':userId},{$set:{
        
//         name: req.body.name,
//         emailID: req.body.emailID,
//         password: req.body.password,
//         phonenumber: req.body.phonenumber,
//         address: req.body.address,
//         product_details:req.body.product_details
//     }},
//     function(err,updatedDetails){
//         console.log("dfdf",userId)
//         if(err){
//             res.send(err)
//         }else{
//             res.json({
//                 success:true,
//                 message: updatedDetails,
//                 userId: updatedDetails.userId
//             })
//         }

//     })
// })

// router.delete('/deleterecord/:userId',function(req,res){
//     var userId = req.params.userId;
//     Signup.deleteOne({'userId':userId},function(err,details){
//         if(err){
//             res.send(err)
//         }else{
//             res.json({
//                 success:true,
//                 message: "deleted"
//             })
//         }
//     })
// })
module.exports = router;