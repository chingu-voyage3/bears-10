// modified from: https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/ 
module.exports = function(passport, ExtractJWT, JWTStrategy) {
  const options = {jwtFromRequest: '', secretOrKey: ''};
  options.jwtFromRequest = ExtractJWT.fromHeader('Authorization');
  options.secretOrKey = process.env.SECRET_JWT_KEY;

  const strategy = new JWTStrategy(options, function(jwt_payload, done) {
      const user = User.findOne({username: jwt_payload.username}, function(err, usr) {
        if (err) { return done(err, false); }
        if (usr) {
            return done(null, usr);
        } else {
            return done(null, false);
        }
      });
  });

  passport.use(strategy);
};
