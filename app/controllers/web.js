
var config   = require('environment_variables');

var records  = require('../models/record');
var admin    = require('../models/admin');
var events   = require('../models/event');

var exports = {};

exports.admin_login = function (req, res) {

	var encrypted_password = admin.encrypt_password( req.body.password );
	
	admin.findOne( {password: encrypted_password}, function(error,admin_user){
		if( error ){
			throw error;
		}
		else{
			if( admin_user ){
				var token = jwt.sign(admin_user, config.jwt_secret, {
					expiresInMinutes: 30 // expires in 30 minutes
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
		}

	});

};

exports.get_all_records_in_event = function (req, res) {
	records.find({})
		  .populate({ path: 'event', match: { _id: req.body.id }})
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
