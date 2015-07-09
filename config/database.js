
var mongoose = require('mongoose');
var db_path = "mongodb://localhost/GIS";

var database = {  

	user_collection_name: 'users',

	admin_collection_name: 'admins',

	event_collection_name: 'events',
	
	connect: function() {

		// Create the database connection 
		mongoose.connect(db_path); 

		// CONNECTION EVENTS
		// When successfully connected
		mongoose.connection.on('connected', function () {  
		  console.log('Mongoose default connection open to ' + db_path);
		}); 

		// If the connection throws an error
		mongoose.connection.on('error',function (err) {  
		  console.log('Mongoose default connection error: ' + err);
		}); 

		// When the connection is disconnected
		mongoose.connection.on('disconnected', function () {  
		  console.log('Mongoose default connection disconnected'); 
		});

		// If the Node process ends, close the Mongoose connection 
		process.on('SIGINT', function() {  
		  mongoose.connection.close(function () { 
				console.log('Mongoose default connection disconnected through app termination'); 
				process.exit(0); 
		  	}); 
		}) 
	}
};

module.exports  = database;
