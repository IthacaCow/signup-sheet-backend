var Schema = require('mongoose').Schema;

var event = new Schema({

	start_time: 
		{ type: Date,   default: Date.now, required: true },
	end_time: 
		{ type: Date,   default: Date.now, required: true },

});

module.exports = mongoose.model('Event', event);
