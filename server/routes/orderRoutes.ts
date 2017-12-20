import { Router, Request, Response } from 'express';

const orderRouter = Router();

orderRouter.get('/', (req: Request, res: Response) => {
  res.json('Order response');
});

export default orderRouter;
