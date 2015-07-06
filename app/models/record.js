
var record_schema = new Schema({

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

// Private APIs
record_schema.api = {

	get_all_records: function () {

	}

};


mongoose.model('Record', record_schema);







