var config = require('environment_variables');
var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, config.db_secret, function(error, decoded) {			
			if (error) {

				return res.status(config.STATUS_CODE_TOKEN_EXPIRE).send({ 
					success: false, 
					message: 'Token expired.'
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
	
});
