var express = require('express')
var User = require('./models/user.ts').User

const router = express.Router()
module.exports = function(passport, ExtractJWT, jwt, bcrypt) {
    const options = { jwtFromRequest: '', secretOrKey: '' }

    const signupUser = require('./actions/signupUser.ts')(User, bcrypt, jwt, options)
    const loginUser = require('./actions/loginUser.ts')(User, bcrypt, jwt, options)        

    options.jwtFromRequest = ExtractJWT.fromHeader('Authorization')
    options.secretOrKey = 'tasmanianDevil'

    router.post('/signup', 
                    passport.authenticate('custom'),
                    signupUser
                )

    router.post('/login',
                 loginUser 
               )

    return router;
}