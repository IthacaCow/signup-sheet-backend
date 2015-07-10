
var config  = require('environment_variables');
var jwt     = require('jsonwebtoken');
var records = require('../models/record');
var admin   = require('../models/admin');
var events  = require('../models/event');

var exports = {};

exports.admin_login = function (req, res) {

	console.log("Incoming request body: " );
	console.log(req.body);
	
	admin.findOne( { username: req.body.username }, function(error,admin_user){
		if( error )
			throw error;
		if( !admin_user )
			console.log("Cannot find admin user");

		if( !error && admin_user ){
			admin_user.comparePassword(req.body.password, function(err, isMatch) {
				if(err) throw err;
				else if(isMatch){
					var token = jwt.sign({}, config.jwt_secret, {
						expiresInSeconds: config.ADMIN_LOGIN_TOKEN_EXPIRE_TIME 
					});
					res.json({
						token: token,
						success: true
					});
				}
				else{
					res.status(config.STATUS_CODE_UNAUTHORIZED).json({
						message: 'Wrong password.'
					});
				}
			});
		}
		else{
			res.status(config.STATUS_CODE_UNAUTHORIZED).json({
				message: 'Authentication fail.'
			});
		}
	});

};

exports.get_all_records_in_event = function (req, res) {
	records.find({})
		  .populate({ path: 'event', match: { _id: req.body.event_id }})
	      .exec(function(error, records){
				if( error ){
					res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
				}
				else{
					res.json( records );	
				}
			})
};

exports.get_all_events = function (req, res) {
	events.find( {}, function(error, events) {
		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else{
			res.json( events );	
		}
	});
};

exports.get_specific_record = function (req, res) {
	records.find({_id: req.body.id}, function( error, record ){
		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else{
			res.json( record );	
		}
			
	});
	
};

exports.get_all_records = function (req, res) {
	
	records.find( {}, function(error, records) {
		if( error ){
			res.status(config.STATUS_CODE_INTERNAL_ERROR).json( { message: error } );
		}
		else{
			res.json( records );	
		}
	});

};

exports.delete_record = function (req, res) {
	
};


module.exports = exports;
