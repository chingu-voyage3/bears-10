// modified from: https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/ 
module.exports = function(passport, ExtractJWT, JWTStrategy) {
  var options = {}
  options.jwtFromRequest = ExtractJWT.fromHeader('Authorization')
  options.secretOrKey = process.env.SECRET_JWT_KEY

  var strategy = new JWTStrategy(options, function(jwt_payload, done) {
      const user = User.findOne({username: jwt_payload.username}, function(err, user) {
        if (err) { return done(err, false); }
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
      })
  })

  passport.use(strategy);
}
