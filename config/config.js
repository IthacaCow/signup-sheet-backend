var configs         = require('environment_variables');
var path            = require('path');
var logger          = require('morgan');
var cookie_parser   = require('cookie-parser');
var body_parser     = require('body-parser');
var method_override = require('method-override');
var mongoose        = require('mongoose');
var morgan          = require('morgan');

module.exports = function(express,app) {

	// use morgan to log requests to the console
	app.use(morgan('dev'));

	// set up database
	mongoose.connect( configs.db_path );

	app.use(body_parser.json());
	app.use(body_parser.urlencoded({ extended: false }));
	app.use(cookie_parser());
	app.use(express.static(path.join(__dirname, 'public')));
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.use(logger('dev'));
	app.use(body_parser);
	app.use(method_override);
	app.use(express.static(__dirname + '/public'));


};

