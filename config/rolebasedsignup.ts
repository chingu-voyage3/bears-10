// const CustomStrategy = require('passport-custom').Strategy;
// var User            = require('../server/models/user.ts').User;

module.exports = function(CustomStrategy, User) {
      return new CustomStrategy(function(req, done) {
        process.nextTick(function() {
            console.log('in role based signup, req.body is: ', req.body);
            if (req.body.password !== req.body.confirmpassword) {
                return done(null, false, {
                    message: 'Your password doesn\'t match your confirmation password.'
                });
            }
            User.findOne({
                username: req.body.username,
            }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (user) {
                    console.log('This user is already registered.');
                    return done(null, false, {
                        message: 'This user is already registered.'
                    });
                } else {
                    const newUser = new User();
                    newUser.username = req.body.username;
                    newUser.password = newUser.generateHash(req.body.password);
                    // by default, the new user will be an Admin
                    if (req.body.role && req.body.role !== 'user' && req.body.role !== 'admin') {
                        return done(null, false, {
                            message: 'This is not a valid role.'
                        });
                    } else if (req.body.role === 'user') {
                        newUser.role = 'user';
                    } else {
                        newUser.role = 'admin';
                    }

                    newUser.save(function(error) {
                        if (err) { throw error; }
                        return done(null, newUser);
                    });
                }
            });
        });
    });
};
