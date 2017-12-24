import { Router, Request, Response } from 'express';
import * as passport from 'passport';
import signupUser from '../actions/signupUser';
import loginUser from '../actions/loginUser';

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  res.json('Order response');
});

userRouter.post('/login', loginUser);
userRouter.post('/signup',
  passport.authenticate('custom', {
    session: false
  }),
  signupUser
);

export default userRouter;
