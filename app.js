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

app.listen(port,() => {
	console.log(`Server running at port `+port);
	});



const mongo = require('mongodb').MongoClient;
const uri = "mongodb://khushi:khushi@be-better-together-wmrbk.mongodb.net/test?retryWrites=true";
//const client = new MongoClient(uri, { useNewUrlParser: true });
mongo.connect(uri, (err,client) => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  if(err){
  	console.error(err);
  	return
  }
});


