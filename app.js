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

app.get('/logout', function (req, res,html) {
 res.sendFile(path.join(__dirname+'/logout.html'));
});

app.listen(port,() => {
	console.log(`Server running at port `+port);
	});

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

