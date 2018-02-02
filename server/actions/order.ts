import { Order } from '../models/order';
import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

function createOrder(req: Request, res: Response) {
  const newOrder = new Order({
    item: req.body.item,
    sku: req.body.sku,
    vendor: req.body.vendor,
    quantity: req.body.quantity,
    price: req.body.price,
    dateOrder: new Date(Date.now()).toDateString(),
    orderClosed: req.body.orderClosed,
    dateClosed: req.body.dateClosed
  });
newOrder.save()
  .then((order) => {
    return res.json({'orderCreated': order});
  })
  .catch((err) => {
    return handleError(err, res);
  });
}
function updateOrder(req: Request, res: Response) {
    Order.findById(req.params.orderId)
        .then((order) => {
          order.item = req.body.item;
          order.sku = req.body.sku;
          order.vendor = req.body.vendor;
          order.quantity = req.body.quantity;
          order.price = req.body.price;
          if (req.body.orderClosed) {
            order.orderClosed = req.body.orderClosed;
            order.dateClosed = req.body.dateClosed;
          }
          order.save()
          .then(() => {
              return res.json({'orderUpdated': order });
          })
          .catch((err) => {
            return handleError(err, res);
          });
        })
        .catch((err) => {
          return handleError(err, res);
        });
}

function deleteOrder(req: Request, res: Response) {
    const orderId = req.params.orderId;
    Order.findById(orderId)
        .remove(() => {
            return res.json({'orderDeleted': orderId });
        })
        .catch((err) => {
          return handleError(err, res);
        });
}

function getOrders(req: Request, res: Response) {
  Order.find({})
    .exec((err, orders) => {
        if (err) {
          return handleError(err, res);
        }
        res.json({'Orders': orders});
    });
}

function getOrder(req: Request, res: Response) {
  Order.findById(req.params.orderId)
    .exec((err, order) => {
      if (err) {
        return handleError(err, res);
      }
      return res.json({ 'Order': order });
    });
}

function handleError(err: Error, res: Response) {
  return res.status(500).json({
    title: 'An error occured',
    error: err
  });
}

export {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrders,
    getOrder
};
