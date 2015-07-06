var express      = require('express');
var app          = express();



require('config')(express,app);
require('error_handler')(app);
require('./routes')(app);
require('http').createServer(app).listen( app.get('port') );

console.log( " GIS server starts listening on port " + app.get('port') );

module.exports = app;
