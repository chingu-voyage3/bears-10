import { Item } from '../models/item';

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

function getAll(req: express.Request, res: express.Response) {
    Item.find({})
        .exec((err, items) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.json({'Items': items});
        });
}

function createItem(req: express.Request, res: express.Response) {
    const newItem = new Item({
        name: req.body.name,
        SKU: req.body.SKU,
        sellable: req.body.sellable,
        retailPrice: req.body.retailPrice,
        orderPrice: req.body.orderPrice,
        manufacturer: req.body.manufacturer,
        description: req.body.description,
        size: req.body.size,
        taxExempt: req.body.taxExempt,
        count: req.body.count,
        reorderedCount: req.body.reorderedCount,
        orderNeeded: req.body.orderNeeded,
        orderPlaced: req.body.orderPlaced,
        backordered: req.body.backordered,
        expectedDelivery: req.body.expectedDelivery,
        categories: req.body.categories
    });
    newItem.save()
        .then((item) => {
        return res.json({'itemCreated': item});
        })
        .catch((err) => {
            return res.status(500).json({
                title: 'An error has occured',
                error: err
            });
        });
}

function updateItem(req: express.Request, res: express.Response) {
    const itemId = req.params.itemId;
    Item.findById(itemId)
        .then((item) => {
            item.name = req.body.name;
            item.SKU = req.body.SKU;
            item.sellable = req.body.sellable;
            item.retailPrice = req.body.retailPrice;
            item.orderPrice = req.body.orderPrice;
            item.manufacturer = req.body.manufacturer;
            item.description = req.body.description;
            item.size = req.body.size;
            item.taxExempt = req.body.taxExempt;
            item.count = req.body.count;
            item.reorderedCount = req.body.reorderedCount;
            item.orderNeeded = req.body.orderNeeded;
            item.orderPlaced = req.body.orderPlaced;
            item.backordered = req.body.backordered;
            item.expectedDelivery = req.body.expectedDelivery;
            item.categories.push(req.body.category);
            item.save()
                .then(() => {
                    return res.json({'itemUpdated': item });
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

function deleteItem(req: express.Request, res: express.Response) {
    const itemId = req.params.itemId;
    Item.findById(itemId)
        .remove(() => {
            return res.json({'itemDeleted': itemId });
        })
        .catch((err) => {
            return res.status(500).json({
                title: 'An error has occured',
                error: err
            });
        });
}

/**
 * Item category methods
 */

function queryItems(queryObject: object) {
  return Item.find(queryObject);
}

function queryItemsByProp(prop: string) {
  return Item.distinct(prop);
}

function addCategory(req: express.Request, res: express.Response, next: express.NextFunction) {
  Item.findById(req.params.itemId, (err, item) => {
      if (err) {
          res.status(500).send(err);
      } else {
          const categories = item.categories;
          if (!categories.includes(req.params.category)) {
              categories.push(req.params.category);
          }
      }
      item.save((error, savedItem) => {
          if (err) {
              res.status(500).send(err);
          }
        res.status(200).send(savedItem);
      });
  });
}

function deleteCategory(req: express.Request, res: express.Response, next: express.NextFunction) {
    Item.findById(req.params.itemId, (err, item) => {
        if (err) {
            res.status(500).send(err);
        } else {
            item.categories.splice(parseInt(req.params.categoryIndex, 10), 1);
        }

        item.save((error, savedItem) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(savedItem);
        });
    });
}

function getAllCategories(req: express.Request, res: express.Response, next: express.NextFunction) {
  queryItemsByProp('category')
    .then((doc) => res.json(doc))
    .catch((err) => next(err));
}

function getItemsByCategory(req: express.Request, res: express.Response, next: express.NextFunction) {
  queryItems({category: req.params.category})
    .then((docs) => res.json(docs))
    .catch((err) => next(err));
}

export {
    createItem,
    getAll,
    updateItem,
    deleteItem,
    addCategory,
    deleteCategory,
    getItemsByCategory,
    getAllCategories
};
