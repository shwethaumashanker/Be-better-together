const http = require('http');
const port=process.env.PORT || 1414
/*const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h1>Hello World</h1>');
	});*/
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/main', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/main.html'));
});

app.get('/signup', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/signup.html'));
});

app.get('/profile', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/profile.html'));
});

app.get('/logout', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/logout.html'));
});

app.listen(port,() => {
	console.log(`Server running at port `+port);
	});
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://khushi:khushi@be-better-together-wmrbk.mongodb.net/test?retryWrites=true";
MongoClient.connect(url, {useNewUrlParser: true},function(err,db) {
  if (err) throw err;
  console.log("Database created!");
  //db.close();
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err,res){
    if(err) throw err;
    console.log("collection created");
    db.close();
  });
});
*/

var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");  
var user = require("./models/user");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
mongoose.connect('mongodb+srv://khushi:khushi@be-better-together-wmrbk.mongodb.net/test?retryWrites=true',{useNewUrlParser: true},function(error){
  if(error){
console.log("Couldn't connect to database");
    } else {
      console.log("Connected To Database");
    }
});
  

  

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

/*var db = mongoose.connection;
var userSchema = new mongoose.Schema({
  name: String,
  password: String
});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});*/

