// load up role based strategy
const roleSignupStrategy = require('./rolebasedsignup.ts'),
      CustomStrategy = require('passport-custom').Strategy;

// expose this function to our app using module.exports
module.exports = function(passport, User) {
    passport.use(roleSignupStrategy(CustomStrategy, User));
};
