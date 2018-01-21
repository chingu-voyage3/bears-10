import { Router } from 'express';
import * as orderControllers from '../actions/order';

const orderRouter = Router();

orderRouter.get('/', orderControllers.getOrders);

orderRouter.post('/', orderControllers.createOrder);

orderRouter.get('/:orderId', orderControllers.getOrder);

orderRouter.post('/:orderId', orderControllers.updateOrder);

orderRouter.delete('/:orderId', orderControllers.deleteOrder);

export default orderRouter;
