var api = require('api');
var web = require('web');
var auth = require('auth');

module.exports = function(app) {

// Verify auth token on every incoming request
	app.use(auth);

// Routes designated for Card-Reader APIs 
	app.post("/api/sign_up/",              api.signup);

	app.post("/api/sign_up/get_user_info", api.get_user_info);

// Routes designated for Web Interface
	app.delete("/sign_up/record/:id", web.delete_record);

	app.get("/sign_up/record/:id",    web.get_specific_record);

	app.get("/sign_up/records",       web.get_all_records);

// catch 404 and forward to error handler
// will catch any url that is not on the routing table
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

};


