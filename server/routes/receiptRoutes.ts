import { Router } from 'express';
import * as receiptControllers from '../actions/receipt';

const receiptRouter = Router();
console.log('in receiptroutes.ts file')
receiptRouter.post('/', receiptControllers.createReceipt);

export default receiptRouter;
