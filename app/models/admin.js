var crypto = require('crypto');

var admin = new mongoose.Schema ({
	password: 
		{ type: String , default: '' },
	access_token:
		{ type: String , default: '' }
});

var Admin = mongoose.model('Admin', admin);

Admin.encrypt_password = function (password) {
	if (!password) return '';
	try {
	  return crypto.createHmac('sha1', this.salt)
					.update(password)
					.digest('hex');
	} catch (err) {
	  return '';
	}
};



module.exports = Admin;

