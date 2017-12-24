import User from '../models/user';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
    // return a login middleware
 export default function(req, res, next) {
    User.findOne({username: req.body.username}, function(err, user) {
        console.log('in login user action');
        if (err) {
            return err;
        }
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const payload = { id: user._id, isAdmin: user.role === 'admin' };
            const token = jwt.sign(payload, process.env.SECRET_JWT_KEY);
            res.json({message: 'ok', token: token});
        } else if (!user) {
            res.json('there is no user with that username');
        } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.json({message: 'bad password'});
        } else {
            res.json('there was an error...');
        }
    });
}
