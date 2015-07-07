var mongoose = require('mongoose');

var user = new mongoose.Schema({

	card_id:
		{ type: String, default: '' , required: true },
	firstname: 
		{ type: String, default: '' , required: true },
	lastname: 
		{ type: String, default: '' , required: true },
	avatar: 
		{ data: Buffer, contentType: String ,  default: '' } 
	// The base64 image
	// More info: https://gist.github.com/aheckmann/2408370 
	// More info: http://stackoverflow.com/questions/27353346/saving-image-with-mongoose 

});


module.exports = mongoose.model('User', user);



