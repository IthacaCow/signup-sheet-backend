
module.exports = function(app) {

	app.post("/sign_up/add_record",      sign_up.add_record);

	app.delete("/sign_up/delete_record", sign_up.delete_record);

	app.get("/sign_up/record/:id",       sign_up.get_specific_record);

	app.get("/sign_up/record",           sign_up.get_all_records);

	// catch 404 and forward to error handler
	// will catch any url that is not on the routing table
	app.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

};
