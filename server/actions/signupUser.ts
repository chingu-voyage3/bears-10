module.exports = function(User, bcrypt, jwt, options) {
    return function(req, res, next) {
        // TODO: refactor so user is not found twice
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        User.findOne({username: req.body.username}, function(err, user) {
            if (err) { return err };
            console.log('user is ', user)
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
}