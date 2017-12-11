var express = require('express')
var User = require('./models/user.ts').User
const router = express.Router()
module.exports = function(passport, ExtractJWT, jwt, bcrypt) {
    const logger = (req, res, next) => {
        console.log('request ', req.body) 
        console.log('username ', req.body.username) 
        console.log('password ', req.body.password) 
        next()
        // console.log('passport authenticate is: ', passport.authenticate('local-signup'))
    }
    const options = { jwtFromRequest: '', secretOrKey: '' }
    options.jwtFromRequest = ExtractJWT.fromHeader('Authorization')
    options.secretOrKey = 'tasmanianDevil'
    router.post('/signup', 
                logger, 
                passport.authenticate('custom'),
                function(req, res, next) {
                    // TODO: refactor so user is not found twice
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                    User.findOne({username: req.body.username}, function(err, user) {
                        if (err) throw err;
                        if(bcrypt.compareSync(req.body.password, user.password)) {
                            console.log('good password')
                            const payload = { id: user._id }
                            const token = jwt.sign(payload, options.secretOrKey)
                            res.json({success: true, message: 'ok', token: token})
                        } else {
                            console.log('bad password')
                            res.json({success: false, message: 'bad password'})
                        }
                    })
                }
            )

    router.post('/login',
                function(req, res, next) {
                    console.log('in login!')
                    User.findOne({username: req.body.username}, function(err, user) {
                        if (err) throw err;
                        if(bcrypt.compareSync(req.body.password, user.password)) {
                            console.log('good password')
                            const payload = { id: user._id }
                            const token = jwt.sign(payload, options.secretOrKey)
                            res.json({message: 'ok', token: token})
                        } else {
                            res.json({message: 'bad password'})
                        }
                        console.log('in login, user is: ', user)
                    })
                }
    )
    return router;
}