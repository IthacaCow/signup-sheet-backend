
var users   = require('../models/user');
var records = require('../models/record');
var events  = require('../models/event');
var exports = {};

function find_event( event_id, user_id ) {

	events.find({event_id: event_id}, function( error, _event ){
		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else if( event_id ){

			// Save the new record
			var new_record = new Record({
				user: user_id,
				_event: event_id
			});

			new_record.save( function(error) {
				if( error )
					res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
			});

			// Sign an access token
			var access_token = jwt.sign(user, config.jwt_secret, {
				expiresInSeconds: 10 // expires in 10 seconds
			});

			var response = {
				id: user._id,
				/* TODO due:  users.is_due( user ), */
				token: access_token,
				success: true
			}

			res.json( response );	

		}
		else{
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json({
				message: 'Event ID not found.'
			});


		}

	});
}

exports.signup = function(req, res) {

	users.findOne({card_id: req.body.card_id}, function (error, user){

		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else{
			if( user )
				find_event( req.body.event_id, user._id );
			else{
				res.status(config.STATUS_CODE_INTERNAL_ERROR).json({
					message: 'The card ID does not have a corresponding user.'
				});
			}
		}
		
	});
};

exports.get_user_info = function(req, res) {

	user.find({_id: req.body.id}, function( error, user ){
		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else{
			res.json( user );	
		}
			
	});

};

module.exports = exports;
