import { Item } from "../models/item";

import * as express from "express";
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";

function getAll(req, res){
    Item.find({})
        .exec((err, items) => {
            if(err){
                return res.status(500).json({
                    title: "An error occured",
                    error: err
                })
            }
            res.json({"Items": items})
        })
}

function createItem(req, res){
    const newItem = new Item({
        name: req.body.name,
        ID: req.body.ID,
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
    newItem.save((err) => {
        if (err){ 
            return res.status(500).json({
                title: 'An error has occured',
                error: err
            })
        }
        return res.json({"itemCreated": newItem})
    })
}



export { createItem, getAll };