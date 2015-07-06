
var mongoose = require('mongoose');

var database = require('database');

var records  = mongoose.model('Record');

var admin    = mongoose.model('Admin');

exports.admin_login = function (req, res) {

	// don't do password encryption for now
	// var encrypted_password = admin.encrypt_password( req.body.password );
	
	admin.findOne( {req.body.password}, function(error,admin_user){
		if( error ){
			throw error;
		}
		else{
			if( admin_user ){
				var token = jwt.sign(user, database.secret, {
					expiresInMinutes: 30 // expires in 30 minutes
				});

				res.json({
					token: token
				});
			}
			else{

			}
		}

	});

};
exports.delete_record = function (req, res) {
	
};

exports.get_specific_record = function (req, res) {
	
};

exports.get_all_records = function (req, res) {
	
};


