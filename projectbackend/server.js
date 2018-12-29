var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser'); //for converting the user input data from bits into user readable data
var signup = require('./routes/signuproutes');
var login = require('./routes/loginroutes');
var addToCart = require('./routes/addToCartRoutes');
var subcategorydetail = require('./routes/subcategoryroutes');
var homepageimages = require('./routes/homepageroutes');
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/project");
    

app.use('/signup',signup);
app.use('/login',login);
app.use('/cartdetails',addToCart);
app.use('/subcategorydetails',subcategorydetail);
app.use('/homepageimagedetails',homepageimages)
app.listen(5000,function(){
    console.log("server listening to the port..");
});

