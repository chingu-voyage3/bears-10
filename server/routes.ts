module.exports = function(passport, ExtractJWT, jwt, bcrypt, express, User) {
    const router = express.Router();
    const options = { jwtFromRequest: '', secretOrKey: '' };

    const signupUser = require('./actions/signupUser.ts')(User, bcrypt, jwt, options),
          loginUser = require('./actions/loginUser.ts')(User, bcrypt, jwt, options),
          addItem = require('./actions/addItem.ts')(User, bcrypt, jwt, options);

    options.jwtFromRequest = ExtractJWT.fromHeader('Authorization');
    options.secretOrKey = process.env.SECRET_JWT_KEY;

    router.post('/signup',
                    passport.authenticate('custom', {
                        session: false
                    }),
                    signupUser
                );

    router.post('/login',
                 loginUser
               );

    router.post('/add_item',
                 addItem
               );

    return router;
};
