var CustomStrategy = require('passport-custom').Strategy;
var User            = require('../server/models/user.ts').User;

module.exports = new CustomStrategy(function(req, done) {
    console.log('checking password...')
    if (req.body.password !== req.body.confirmpassword) {
        return done(null, false, {
            message: 'Your password doesn\'t match your confirmation password.'
        })
    } 
    return done(null, true)
})