var error_handler = require('errorhandler');
var api  = require('api');
var web  = require('web');
var auth = require('auth');

module.exports = function (router) {

	console.log(" Adding web route rules... " );


/* == Web Interface API === */
/*  API: admin login in
 *  Method: POST
 *  @param: Password (String)
 *  @return: Temporary access token (String) 
 *  @return: SuccessOrNot (Boolean)
 */
	router.post("/admin/login",  web.admin_login);


// Verify auth token on every incoming request below
	router.use(auth);

/* APIs below require authentication */

/*  API: delete specific record
 *  Method: DELETE
 *  @param: Temporary access token (String) 
 *  @param: Record Object ID (String) 
 *  @return: none 
 */
	router.delete("/record/:id",      web.delete_record);

/*  API: get specific record
 *  Method: GET
 *  @param: Temporary access token (String) 
 *  @param: Record Object ID (String) 
 *  @return: The record (JSON) (See README.md)
 */
	router.get("/record/:id",         web.get_specific_record);

/*  API: get all records in a specific event
 *  Method: GET
 *  @param: Temporary access token (String) 
 *  @param: Event Object ID (String) 
 *  @return: The records (JSON) (See README.md)
 */
	router.get("/records/:event_id",  web.get_all_records_in_event);

/*  API: get all records 
 *  Method: GET
 *  @param: Temporary access token (String) 
 *  @return: The records (JSON) (See README.md)
 */
	router.get("/records/",           web.get_all_records);

/*  API: get all events 
 *  Method: GET
 *  @param: Temporary access token (String) 
 *  @return: The events (JSON) (See README.md)
 */
	router.get("/events",             web.get_all_events);

/* ======================== */


// For debug purpose
	router.get("/status", function(req,res){ res.json({"message": "server running", "success":true}) });

// catch 404 and forward to error handler
// will catch any url that is not on the routing table
	router.use(function(req, res, next) {
	  var err = new Error('Not Found');
	  err.status = 404;
	  next(err);
	});

	router.use(error_handler({ dumpExceptions: true, showStack: true }));

	return router;
};


