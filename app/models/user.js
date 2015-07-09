var mongoose = require('mongoose');
var user_collection_name = require('database').user_collection_name;

var user = new mongoose.Schema({

	cardID:
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

},{ collection : user_collection_name } );

console.log("Setting up user collection: " + user_collection_name);

module.exports = mongoose.model('User', user);



