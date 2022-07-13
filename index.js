// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("calculation is " + result);
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res){
    var h1 = parseFloat(req.body.h);
    var w1 = parseFloat(req.body.w);
    var bmiresult = w1/(h1*h1);
    res.send("calculation is " + bmiresult);
});



app.listen(3000, function(){
    console.log("server started at port 3k");
});