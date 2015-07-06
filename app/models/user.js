var Schema = require('mongoose').Schema;
var ObjectId = Schema.Types.ObjectID;

var user = new Schema({

	firstname: 
		{ type: String, default: '' , required: true },
	lastname: 
		{ type: String, default: '' , required: true },
	avatar: 
		{ data: Buffer, contentType: String , required: true } 
	// The base64 image
	// More info: http://stackoverflow.com/questions/27353346/saving-image-with-mongoose 

});


module.exports = mongoose.model('User', user);



