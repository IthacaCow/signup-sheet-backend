var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var record = new Schema({

	timestamp: 
		{ type: Date, default: Date.now, required: true },
	user:
		{ type: ObjectId, required: true, ref: 'User' },
	_event:
		{ type: ObjectId, required: true, ref: 'Event' },

});


module.exports = mongoose.model('Record', record);







