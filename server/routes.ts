var express = require('express')
const router = express.Router()
module.exports = function(passport) {
    const logger = (req, res, next) => {
        console.log('request ', req.body) 
        console.log('username ', req.body.username) 
        console.log('password ', req.body.password) 
        next()
        // console.log('passport authenticate is: ', passport.authenticate('local-signup'))
    }
    router.post('/signup', 
                logger, 
                passport.authenticate('custom'),
                function(req, res, next) {
                    console.log('req.body is: ', req.body)
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                    // res.json('astring')
                    res.json({payload: 'signup something'})
                }
            )
    return router;
}