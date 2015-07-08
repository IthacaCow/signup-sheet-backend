var path            = require('path');
var logger          = require('morgan');
var body_parser     = require('body-parser');
var method_override = require('method-override');
var morgan          = require('morgan');

module.exports = function(app) {

	console.log(" Configurating server... ");

	// use morgan to log requests to the console
	app.use(morgan('dev'));

	// set up database
	require('database')();

	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: true }));
	// app.set('port', process.env.PORT || 3000);
	app.set('port', 3000);
	app.set('views', __dirname + '/views');
	app.use(logger('dev'));
	app.use(method_override);

};

