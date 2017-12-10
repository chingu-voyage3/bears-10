//adapted from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt   = require('bcrypt-nodejs');

const userSchema = new Schema({
    
        username: {
            type: String,
            required: true,
            message: 'username is required'
        },
        password: {
            type: String,
            required: true
        },
        role: String
})

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports.User = mongoose.model('User', userSchema)