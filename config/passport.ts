// load up role based strategy
const roleSignupStrategy = require('../strategies/rolebasedsignup'),
      CustomStrategy = require('passport-custom').Strategy;

// expose this function to our app using module.exports
module.exports = function(passport, User) {
    passport.use(roleSignupStrategy(CustomStrategy, User));
};
