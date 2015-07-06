var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var sign_up      = require('./routes/sign_up');
var mongoose     = require('mongoose');
var app          = express();



require('config')(app);
require('error_handler')(app);
require('routes')(app);
require('http').createServer(app).listen( app.get('port') );

console.log( " Server starts listening on port " + app.get('port') );

module.exports = app;
