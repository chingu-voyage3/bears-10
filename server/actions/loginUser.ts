module.exports = function(User, bcrypt, jwt, options) {
    // return a login middleware
    return function(req, res, next) {
        User.findOne({username: req.body.username}, function(err, user) {
            if (err) { return err; }
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const payload = { id: user._id, isAdmin: user.role === 'admin' };
                const token = jwt.sign(payload, options.secretOrKey);
                res.json({message: 'ok', token: token});
            } else {
                res.json({message: 'bad password'});
            }
        });
    };
};
