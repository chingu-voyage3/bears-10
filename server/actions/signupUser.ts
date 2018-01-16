import { User } from '../models/user';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
export default function(req, res, next) {
    // TODO: refactor so user is not found twice
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    User.findOne({username: req.body.username}, function(err, user) {
        if (err) { return err; }
        if (req.body.fresh) {
            const payload = { id: user._id, isAdmin: user.role === 'admin' };
            const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, { expiresIn: '1hr' });
            res.json({success: true, message: 'ok', token: token});
        } else {
            res.json({success: true, message: 'user was successfully created'});
        }
    });
}
