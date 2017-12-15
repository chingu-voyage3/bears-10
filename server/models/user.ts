// adapted from https://scotch.io/tutorials/easy-node-authentication-setup-and-local

module.exports = function(mongoose, bcrypt) {
    const Schema = mongoose.Schema;

    const userSchema = new Schema({
            username: {
                type: String,
                required: true,
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
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    return mongoose.model('User', userSchema);
};
