
var error_handler = require('errorhandler');

// error handlers
module.exports = function ( app ) {

	app.use(error_handler({ dumpExceptions: true, showStack: true }));

	// development error handler
	// will print stacktrace
	if (app.get('env') === 'development') {
	  app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
		  message: err.message,
		  error: err
		});
	  });
	}
	else {

	// production error handler
	// no stacktraces leaked to user
		app.use(function(err, req, res, next) {
		  res.status(err.status || 500);
		  res.render('error', {
			message: err.message,
			error: {}
		  });
		});
	}

};
