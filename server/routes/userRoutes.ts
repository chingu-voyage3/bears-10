import { Router, Request, Response } from 'express';

const userRouter = Router();

userRouter.get('/', (req: Request, res: Response) => {
  res.json('Order response');
});

export default userRouter;
