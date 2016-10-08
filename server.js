var express = require('express');
var app = express();

/*app.get('/', function(req,res){
   res.send('Hello World from server.js') 
});*/

var mongojs = require('mongojs');
var bodyParser = require ('body-parser');
var db = mongojs('mongodb://pevargas:Policia9@ds049446.mlab.com:49446/meantuto',['meantuto']);

app.use(express.static(__dirname + "/public")); //create public folder

app.get('/contactlist', function(req,res){ //populate tables in page
    console.log("I recieved a GET request");
    db.meantuto.find(function (err, docs){
        console.log(docs);
        res.json(docs);

    })
});

app.listen(3000);
console.log("Server running on port 3000");