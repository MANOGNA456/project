
var express = require('express');   
var _ = require('underscore');
var router = express.Router();
var Signup = require('../models/singup');

router.get('/', function (req, res) {
    res.send("helloo");
});

router.post('/authenticate', function (req, res) {
    // find the user
    Signup.findOne({
        emailID: req.body.emailID
    }, function (err, user) {
        console.log(user);
        if (err) {
            res.json("Error while performing Authentication");
        }
        else if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } 
            else {
                res.json({
                    success: true,
                    message: user,
                    userId: user.userId
                 
                   
                })
            }
        } 
    });
});



module.exports = router;