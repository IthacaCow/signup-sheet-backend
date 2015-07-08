var express = require('express');
var app     = express();


var routes = require('./routes');
app.use('/',routes(express.Router()));

require('config')(app);

require('http').createServer(app).listen( app.get('port') );

console.log( " GIS server starts listening on port " + app.get('port') );

module.exports = app;
