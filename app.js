var logger      = require('morgan');
var body_parser = require('body-parser');
var express     = require('express');
var app         = express();

// log incoming requests to the console
app.use(logger('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

var web_routes = require('./routes/web');
var api_routes = require('./routes/api');
app.use('/web',web_routes(express.Router()));
app.use('/api',api_routes(express.Router()));

require('config')(app);

require('http').createServer(app).listen( app.get('port') );

console.log( " GIS server starts listening on port " + app.get('port') );

module.exports = app;
