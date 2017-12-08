//adapted from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt   = require('bcrypt-nodejs');

const userSchema = new Schema({
    local: {
        username: String,
        password: String
    }
})

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports.User = mongoose.model('User', userSchema)