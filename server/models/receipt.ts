import { Item } from '../models/item';
import { Request, Response } from 'express';

function createReceipt(req: Request, res: Response) {
  function updateCount(item) {
    const itemId    = item.id,
          itemCount = item.count;

    Item.findById(itemId, (err, item) => {
        if (err) { return console.log(err); }
        item.count = Math.max(item.count - itemCount, 0);
        item.save()
    })
  }
  req.body.forEach(updateCount);
  res.json('receipt created!')
} 
 export {
    createReceipt,
};