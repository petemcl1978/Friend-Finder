//pull dependencies
var express = require('express');
var bodyParser = require ('body-parser');
var path = require ('path');

//configure express

var app = express();
var PORT = process.env.PORT;


//pub direct access css files
app.use(express.static(path.join(_dirname, './app/public')));


//middleware for parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


//listening Port
app.listen(PORT, function(){
    console.log('friend finder app is listening on PORT: ' + PORT);
});