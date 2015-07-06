var Schema = require('mongoose').Schema;
var ObjectId = Schema.Types.ObjectID;

var record = new mongoose.Schema({

	timestamp: 
		{ type: Date,   default: Date.now , required: true },
	user:
		{ type: ObjectId, required: true, ref: 'User' },
	event:
		{ type: ObjectId, required: true, ref: 'Event' },

});


module.exports = mongoose.model('Record', record);







