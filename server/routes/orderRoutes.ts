import { Router } from 'express';
import * as orderControllers from '../actions/order';

const orderRouter = Router();

orderRouter.get('/getOrder', orderControllers.getOrder);

orderRouter.post('/newOrder', orderControllers.createOrder);

orderRouter.post('/updateOrder/:orderId', orderControllers.updateOrder);

orderRouter.delete('/deleteOrder/:orderId', orderControllers.deleteOrder);

export default orderRouter;
