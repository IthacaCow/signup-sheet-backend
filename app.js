var logger      = require('morgan');
var body_parser = require('body-parser');
var express     = require('express');
var app         = express();

// log incoming requests to the console
app.use(logger('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

var routes = require('./routes');
app.use('/',routes(express.Router()));

require('config')(app);

require('http').createServer(app).listen( app.get('port') );

console.log( " GIS server starts listening on port " + app.get('port') );

module.exports = app;
