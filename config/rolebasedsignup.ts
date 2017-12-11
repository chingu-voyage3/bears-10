var CustomStrategy = require('passport-custom').Strategy;
var User            = require('../server/models/user.ts').User;

module.exports = new CustomStrategy(function(req, done) {
    process.nextTick(function() {
        User.findOne({
            username: req.body.username,
        }, function(err, user) {
            if (err) {
                return done(err)
            }
            if (user) {
                console.log('This user is already registered.')
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
                    })
                } else if (req.body.role === 'user') {
                    newUser.role = 'user';
                } else {
                    newUser.role = 'admin';
                }

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }
        })
    })
    
})