var mongoose = require('mongoose');
var bcrypt   = require('bcrypt')
var SALT_WORK_FACTOR = 10; 
var admin_collection_name = require('database').admin_collection_name;

var admin = new mongoose.Schema ({

	username:
		{ type: String , default: '' },

	password: 
		{ type: String , default: '' }

}, { collection: admin_collection_name });


admin.pre('save', function(next) {

    var admin_user = this;

    // only hash the password if it has been modified (or is new)
    if (!admin_user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(admin_user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            admin_user.password = hash;
            next();
        });
    });
});

admin.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

console.log("Setting up admin collection: " + admin_collection_name);

module.exports = mongoose.model('Admin', admin);
