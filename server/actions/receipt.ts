import { Request, Response } from 'express';
function createReceipt(req: Request, res: Response) {
  console.log('creating receipt!')
  console.log('req.body is: ' + JSON.stringify(req.body));
  res.json('receipt created!')
  const itemId    = req.body.id,
        itemCount = req.body.count;
  // get the 
}
export {
    createReceipt,
};