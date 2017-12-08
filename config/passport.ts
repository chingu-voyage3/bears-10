
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var CustomStrategy = require('passport-custom').Strategy;

// load up the user model

var User            = require('../server/models/user.ts').User;

// expose this function to our app using module.exports
module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    var roleSignupStrategy = new CustomStrategy(function(req, done) {
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
    
    passport.use(roleSignupStrategy);

};