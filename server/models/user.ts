// adapted from https://scotch.io/tutorials/easy-node-authentication-setup-and-local
// var mongoose = require('mongoose');

import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;

interface IUser extends mongoose.Document {
  username: string;
  password: string;
  role: string;
}

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
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

export let User: mongoose.Model<IUser> = mongoose.model('User', userSchema);
