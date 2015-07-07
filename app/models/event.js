var mongoose = require('mongoose');

var _event = new mongoose.Schema({

	start_time: 
		{ type: Date,   default: Date.now, required: true },
	end_time: 
		{ type: Date,   default: Date.now, required: true },

});

module.exports = mongoose.model('Event', _event);
