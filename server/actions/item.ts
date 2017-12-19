import { Item } from "../models/item";

import * as express from "express";
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";

export const createItem = (req, res) => {
    return res.send({"status": "reached"});
}



