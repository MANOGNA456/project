var express = require('express');
var _ = require('underscore');
var app = express();
var homepage = require('../models/homepage');
var bodyParser = require('body-parser');
app.use(bodyParser.json());


var router = express.Router();
router.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.post('/homepageimagedetails',function(req,res){
    homepage.create({
        
        imagePath:req.body.imagePath,
        name:  req.body.name,
        price : req.body.price,
        discount:req.body.discount
   
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

router.get('/gethomepageimagedetails',function(req,res){
    homepage.find(function(err,getdetails){
        if(err){
            res.send(err);
        }else{
            res.json({
                message :getdetails,
                // category_id:getdetails.category_id
            })
        }
    })
})




   
   

module.exports = router;