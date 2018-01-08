import { Router } from 'express';
import itemRouter from './itemRoutes';
import orderRouter from './orderRoutes';
import userRouter from './userRoutes';
import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import User from '../models/user';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

const ExtractJwt = passportJWT.ExtractJwt,
      JWTStrategy = passportJWT.Strategy;
const apiRouter = Router();

require('../../config/passport')(passport, User); // pass passport for configuration
require('../../config/jwtAuth')(passport, ExtractJwt, JWTStrategy); // configure jwt authentication

apiRouter.use('/', userRouter);
apiRouter.use('/items', itemRouter);
apiRouter.use('/orders', orderRouter);

export default apiRouter;
