var error_handler = require('errorhandler');
var api  = require('api');
var web  = require('web');
var auth = require('auth');

module.exports = function (router) {

	console.log(" Adding API route rules... " );

/* ==== Card-Reader API === */
/*  API: sign up
 *  Method: GET
 *  @param: Card ID (String)
 *  @param: Event ID (String)
 *  @return: Temporary access token (String) 
 *  @return: Object ID (String) 
 *  @return: SuccessOrNot (Boolean)
 *  @return: DueOrNot (Boolean)
 */
	router.get("/api/signup", api.signup);

// Verify auth token on every incoming request below
	router.use(auth);

/* APIs below require authentication */

/* ==== Card-Reader API === */
/*  API: get user info 
 *  Method: GET
 *  @param: Temporary access token (String) 
 *  @param: User Object ID (String) 
 *  @return: base64 encoded image (String)
 *  @return: first name (String)
 *  @return: last name (String)
 */
	router.post("/api/signup/user", api.get_user_info);

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


