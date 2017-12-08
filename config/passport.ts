
// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model

var User            = require('../server/models/user.ts').User;
console.log('User is: ', User)

// expose this function to our app using module.exports
module.exports = function(passport) {
    console.log('configuring passport!')
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

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('signing up with passport!')
        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose username is the same as the forms email
        // we are checking to see if the user trying to login already exists
        console.log('user.findone is about to fire')
        User.findOne({ 'local.username':  username }, function(err, user) {
            // if there are any errors, return the error
            console.log('finding user...')
            if (err) {
                console.log('there was an error...')
                return done(err);
            }
            

            // check to see if theres already a user with that email
            if (user) {
                console.log('user is already registered')
                // return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                console.log('saving user...')
                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.local.username    = username;
                newUser.local.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser);
                });
            }

        });    

        });

    }));

};