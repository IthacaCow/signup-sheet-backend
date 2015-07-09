var config = require('environment_variables');
var jwt    = require('jsonwebtoken');

module.exports = function(req, res, next) {

	console.log('Authenticating incoming request: METHOD: %s, Directory: %s', req.method, req.url);
	console.log(req.body);

	// check header or url parameters or post parameters for token
	var token = req.body.token  || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks if token expires
		jwt.verify(token, config.jwt_secret, function(error, decoded) {			

			if (error) {

				return res.status(config.STATUS_CODE_TOKEN_EXPIRE).send({ 
					success: false, 
					message: error.message
				});

			} else {
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(config.STATUS_CODE_TOKEN_EXPIRE).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}

};
