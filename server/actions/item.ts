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
        expectedDelivery: req.body.expectedDelivery
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

export {
    createItem,
    getAll,
    updateItem,
    deleteItem
};
