import { Router } from 'express';
import itemRouter from './itemRoutes';
import orderRouter from './orderRoutes';
import userRouter from './userRoutes';

const apiRouter = Router();

apiRouter.use('/', userRouter);
apiRouter.use('/items', itemRouter);
apiRouter.use('/orders', orderRouter);

export default apiRouter;
