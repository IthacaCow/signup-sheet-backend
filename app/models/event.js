var mongoose = require('mongoose');
var event_collection_name = require('database').event_collection_name;

var _event = new mongoose.Schema({

	start_time: 
		{ type: Date,   default: Date.now, required: true },
	end_time: 
		{ type: Date,   default: Date.now, required: true },

},{ collection : event_collection_name });

module.exports = mongoose.model('Event', _event);
