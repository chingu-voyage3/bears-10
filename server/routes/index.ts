import { Router } from 'express';
import itemRouter from './itemRoutes';
import orderRouter from './orderRoutes';

const apiRouter = Router();

apiRouter.use('/items', itemRouter);
apiRouter.use('/orders', orderRouter);

export default apiRouter;
