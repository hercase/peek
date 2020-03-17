var express = require ('express'); 
//var path = require('path');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var mysql = require('mysql');

// const https = require('https');
// var fs = require('fs');
// const options = {
//   key: fs.readFileSync('/etc/ssl/private/autogestion.batan.coop.key').toString(),
//   cert: fs.readFileSync('/etc/ssl/certs/autogestion.batan.coop.crt').toString()
// };


var app = require('./app');

// var sv = https.createServer(options, app);

 app.listen(4000, function(oReq, oRes) {
    console.log("API Peek");   
  });