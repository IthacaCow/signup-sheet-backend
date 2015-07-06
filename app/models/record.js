
var record = new mongoose.Schema({

	id: 
		{ type: ObjectId },
	card_id: 
		{ type: String, default: '' },
	firstname: 
		{ type: String, default: '' },
	lastname: 
		{ type: String, default: '' },
	timestamp: 
		{ type: Date,   default: Date.now },
	avatar: 
		{ data: Buffer, contentType: String }, 
	// The base64 image
	// More info: http://stackoverflow.com/questions/27353346/saving-image-with-mongoose 

});


module.exports = mongoose.model('Record', record);







