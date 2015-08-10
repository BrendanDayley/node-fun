/* global process */
'use strict';
//#############################################################
//		 DEPENDANCIES
//#############################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


//#############################################################
//		 DEPENDANCY INVOCATION
//#############################################################
var app = express();

var port =  process.argv[2] || 8181;


app.listen(port, function(){
	console.log('listening on port: ' + port);
});