var path            = require('path');
var method_override = require('method-override');

module.exports = function(app) {

	console.log(" Configurating server... ");

	// set up database
	require('database').connect();

	// app.set('port', process.env.PORT || 3000);
	app.set('port', 3000);
	app.set('views', __dirname + '/views');

	app.use(method_override);

};

