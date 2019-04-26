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
var expressHbs = require('express-handlebars');


<<<<<<< HEAD
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', './views');
//res.render(view, locals);
=======
//app.engine('.html', require('ejs').__express);
//app.set('view engine', 'ejs');
app.set('views','./views');
app.engine('.hbs', expressHbs({extname:'.hbs'}));
app.set('view engine', '.hbs');
>>>>>>> master
// respond with "hello world" when a GET request is made to the homepage
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/login.html'));
  //__dirname : It will resolve to your project folder.
});

<<<<<<< HEAD
/*app.get('/main', function (req, res,html) {
=======
app.get('/main', function (req, res,next) {
>>>>>>> master
  post.find({},function(err,posts){
  if(err){
    console.log(err);
  }
  else{
   // for(var i in posts){
      res.render('main',{ post : posts});
      //console.log('List of posts',posts[i].title);
    //}
  }
});*/

  app.get('/main', (req, res) => {
    
  post.find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('main.html', {posts: result})
  })
});
<<<<<<< HEAD
 /*res.sendFile(path.join(__dirname+'/views/main.html'));
});*/
=======
 //res.sendFile(path.join(__dirname+'/main.html'));


});
>>>>>>> master

app.get('/signup', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/views/signup.html'));
});

app.get('/Logo', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/Logo.png'));
});

app.get('/profile', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/views/profile.html'));
});

app.get('/logout', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/views/logout.html'));
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
var post = require("./models/post");

//var multer = require('multer');
//var fs = require('fs');

const routes = require('./routes/GetPost');
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");


//var LocalStrategy = require("passport-local");
//var passportLocalMongoose = require("passport-local-mongoose");
//var bcrypt = require("bcrypt");

mongoose.connect('mongodb+srv://khushi:khushi@be-better-together-wmrbk.mongodb.net/test?retryWrites=true',{useNewUrlParser: true},function(error){
  if(error){
console.log("Couldn't connect to database");
    } else {
      console.log("Connected To Database");
    }
});
  
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.post("/profile", (req, res) => {
var myData = new post(req.body);
 myData.save()
 .then(item => {
 res.sendFile(path.join(__dirname+'/views/profile.html'));
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

app.post("/signup", (req, res) => {
let{fullname,email,password} =req.body;
let userData ={
  fullname,
  email,
  password
};
var myData = new user(req.body);
myData.save()
 .then(item => {
 //res.send("item saved to database");
<<<<<<< HEAD
  res.sendFile(path.join(__dirname+'/views/main.html'));
=======
  res.sendFile(path.join(__dirname+'/profile.html'));
>>>>>>> master
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
});
});

app.post("/signin",(req,res) =>{
let{email,password} = req.body;
user.findOne({email:email},'email password',(err,userData)=>{
  if(!err){
    console.log(userData.password);
    if(password === userData.password){
<<<<<<< HEAD
      res.sendFile(path.join(__dirname+'/views/main.html'));
=======
      res.sendFile(path.join(__dirname+'/profile.html'));
>>>>>>> master
    }
    else{
      res.sendFile(path.join(__dirname+'/views/login.html'));
     // res.status(401).send(password+'incorrect password');
    }
  }
  else{
   //res.status(401).send('invalid login credentials')
   res.sendFile(path.join(__dirname+'/views/login.html'));
  }
  });
});

/*app.get('/main',function(req,res){
post.find({},function(err,posts){
  if(err){
    console.log(err);
  }
  else{
    for(var i in posts){
      console.log('List of posts',posts[i].title);
    }
  }
});
});*/


