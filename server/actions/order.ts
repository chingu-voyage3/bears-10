import { Order } from '../models/order';

import * as express from 'express';
import * as mongoose from 'mongoose';

function createOrder(req: express.Request, res: express.Response) {
  const newOrder = new Order({
    sku: req.body.sku,
    vendor: req.body.vendor,
    quantity: req.body.quantity,
    price: req.body.price
  });
newOrder.save()
  .then((order) => {
    return res.json({'orderCreated': order});
  })
  .catch((err) => {
    return res.status(500).json({
      title: 'An error has occured',
      error: err
    });
  });
}
function updateOrder(req: express.Request, res: express.Response) {
    const orderId = req.params.orderId;
    Order.findById(orderId)
        .then((order) => {
          order.SKU = req.body.sku;
          order.vendor = req.body.vendor;
          order.quantity = req.body.quantity;
          order.price = req.body.price;
          order.save()
          .then(() => {
              return res.json({'orderUpdated': order });
          })
          .catch((err) => {
              return res.status(500).json({
                  title: 'An error has occured',
                  error: err
              });
          });
        })
        .catch((err) => {
              return res.status(500).json({
                  title: 'An error has occured',
                  error: err
              });
          });
}

function deleteOrder(req: express.Request, res: express.Response) {
    const orderId = req.params.orderId;
    Order.findById(orderId)
        .remove(() => {
            return res.json({'orderDeleted': orderId });
        })
        .catch((err) => {
            return res.status(500).json({
                title: 'An error has occured',
                error: err
            });
        });
}

function getOrder(req: express.Request, res: express.Response) {
    Order.find({})
        .exec((err, orders) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.json({'Orders': orders});
        });
}

export {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder
};
