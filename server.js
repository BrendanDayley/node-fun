/* global process */

'use strict';

//#############################################################
//		 Twilio Credentials
//#############################################################
var accountSid = '';
var authToken = '';

//#############################################################
//		 DEPENDANCIES
//#############################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var twilio = require('twilio')
var Firebase = require('firebase');

// Get a database reference to our posts
var ref = new Firebase("https://brendan-textsupport.firebaseio.com/web/saving-data/fireblog/posts");


var app = express();
var port =  process.argv[2] || 8080;
var client = twilio(accountSid, authToken);




//#############################################################
//		 MIDDLEWARE
//#############################################################
app.use(express.static('public'));
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

app.post('/api/send_text_message', function (req, res){
	console.log(req.body);
	
	client.messages.create({
	//to: "2089641796",
	to: "8013617836",
	from: "+18014712323",
	body: req.body.message,   
}, function(err, message) { 
	if(err){
		console.log('aahhhh!!: ', err);
	}
	//console.log(message.sid); 
})

	res.json(req.body.message);
});

// app.post('/api/send_text_message', function(req, res){
// 	console.log(req.body.message);
// 	req.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-04-01/Accounts/')
// })





app.listen(port, function(){
	console.log('listening on port: ' + port);
});