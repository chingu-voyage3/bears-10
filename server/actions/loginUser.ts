import { User } from '../models/user';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
    // return a login middleware
 export default function(req, res, next) {
    User.findOne({username: req.body.username}, function(err, user) {
        if (err) {
            return err;
        }
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const payload = { id: user._id, isAdmin: user.role === 'admin' };
            const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, { expiresIn: '1hr' });
            res.json({message: 'ok', token: token});
        } else if (!user) {
            res.json({message: 'there is no user with that username'});
        } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.json({message: 'bad password'});
        } else {
            res.json({message: 'there was an error...'});
        }
    });
}
