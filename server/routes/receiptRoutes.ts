import { Router } from 'express';
import * as receiptControllers from '../actions/receipt';

const receiptRouter = Router();
receiptRouter.post('/', receiptControllers.createReceipt);

export default receiptRouter;
