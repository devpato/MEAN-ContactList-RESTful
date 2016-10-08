var express = require('express');
var app = express();

/*app.get('/', function(req,res){
   res.send('Hello World from server.js') 
});*/

var mongojs = require('mongojs');
var bodyParser = require ('body-parser');
var db = mongojs(' mongodb://pevargas:Policia9@ds049446.mlab.com:49446/meantuto',['meantuto']);

app.use(express.static(__dirname + "/public")); //create public folder
     

/*app.get('/contactlist', function(req,res){
    console.log("I received a GET request");
    person1 = {
        name: 'Tim',
        email: 'tim@gmail.com',
        number: '(111)-222-333'
    }
    person2 = {
        name: 'Mary',
        email: 'mary@gmail.com',
        number: '(666)-222-999'
    }
    person3 = {
        name: 'Alex',
        email: 'alex@gmail.com',
        number: '(444)-777-333'
    }
    var contactList = [person1, person2, person3];
    res.json(contactList);//converts this to a json format
});*/

app.listen(3000);
console.log("Server running on port 3000");