/* global __dirname */
/* global process */

'use strict';
//#############################################################
//		 DEPENDANCIES
//#############################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port =  process.argv[2] || 8181;

//#############################################################
//		 MIDDLEWARE
//#############################################################
app.use(express.static(__dirname + 'public'));
app.use('/', bodyParser.json());
app.use('/', cors());

//#############################################################
//		 Variables
//#############################################################
var message = {
	"message": "hello World!!!!!"
}

//#############################################################
//		 ENDPOINTS
//#############################################################
app.get('/api/message', function(req, res){
	res.json({"message": "HELLO WORLD!!!!!"})
});

app.post('/api/receive_message', function (req, res){
	console.log(req.body);
	res.json(req.body);
});
app.listen(port, function(){
	console.log('listening on port: ' + port);
});