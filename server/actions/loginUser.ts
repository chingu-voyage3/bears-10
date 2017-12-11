module.exports = function(User, bcrypt, jwt, options) {
    // return a login middleware
    return function(req, res, next) {
        console.log('in login!')
        User.findOne({username: req.body.username}, function(err, user) {
            if (err) return err;
            if(bcrypt.compareSync(req.body.password, user.password)) {
                console.log('good password')
                const payload = { id: user._id }
                const token = jwt.sign(payload, options.secretOrKey)
                res.json({message: 'ok', token: token})
            } else {
                res.json({message: 'bad password'})
            }
        })
    }
}