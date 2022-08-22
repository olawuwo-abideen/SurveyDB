//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));




mongoose.connect("mongodb://localhost:27017/surveyDB", {useNewUrlParser: true});

const surveySchema = {
  
  Name: String,
  Address: String,
  Email: String,
  Age: Number,
  rating: String,
  Recommend: String,
  MostLike: String,
  Prefer: String,
  Comment: String

};

const Survey = new mongoose.model("Survey", surveySchema);




app.post("/home", function(req, res){

    const newSurvey = new Survey({
     Name : req.body.name,
    Address : req.body.address,
     Email : req.body.email,
     Age : req.body.Number,
     rating : req.body.rating,
     Recommend : req.body.recommend,
     MostLike : req.body.mostlike,
     Prefer : req.body.prefer,
    Comment : req.body.comment
    

});

newSurvey.save(function(err){
  if (err) {
    console.log(err);
  } else {
    res.render('thanks')
  }
})

})





app.get("/", function(req, res){
  res.render("home");
});

app.listen(3000, function(){
    console.log("server is running on port 3000")
})














