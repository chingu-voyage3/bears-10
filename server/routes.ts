module.exports = function(passport, ExtractJWT, jwt, bcrypt, express, User) {
    const router = express.Router();
    const options = { jwtFromRequest: '', secretOrKey: '' };

    const signupUser = require('./actions/signupUser.ts')(User, bcrypt, jwt, options);
    const loginUser = require('./actions/loginUser.ts')(User, bcrypt, jwt, options);

    options.jwtFromRequest = ExtractJWT.fromHeader('Authorization');
    options.secretOrKey = process.env.SECRET_JWT_KEY;

    router.post('/signup',
                    passport.authenticate('custom'),
                    signupUser
                );

    router.post('/login',
                 loginUser,
               );

    return router;
};
