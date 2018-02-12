import { Item } from '../models/item';
import { Request, Response } from 'express';

function createReceipt(req: Request, res: Response) {
  console.log('creating receipt!')
  console.log('req.body is: ' + JSON.stringify(req.body));
  res.json('receipt created!')
  const itemId    = req.body[0].id,
        itemCount = req.body[0].count;

  Item.findById(itemId, (err, item) => {
      if (err) { return console.log(err); }
      item.count = Math.max(item.count - itemCount, 0);
      item.save();
  })
} 
 export {
    createReceipt,
};