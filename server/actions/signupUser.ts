import User from '../models/user';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
export default function(req, res, next) {
    // TODO: refactor so user is not found twice
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    User.findOne({username: req.body.username}, function(err, user) {
        if (err) { return err; }
        console.log('user is ', user);
        console.log('req.body is: ', req.body);
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const payload = { id: user._id, isAdmin: user.role === 'admin' };
            const token = jwt.sign(payload, process.env.SECRET_JWT_KEY);
            res.json({success: true, message: 'ok', token: token});
        } else if (req.body.password !== req.body.confirmpassword) {
            res.json({success: false, message: 'password doesn\'t match'});
        } else {
            res.json({success: false, message: 'bad password'});
        }
    });
}
