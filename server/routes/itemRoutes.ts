import { Router } from "express";
import * as passport from "passport";
import * as itemControllers from "../actions/item";

const itemRouter = Router();

//GET ALL ITEMS
itemRouter.get('/all', itemControllers.getAll);

//MODIFY AN EXISTING ITEM
itemRouter.post('/update/:itemId', itemControllers.updateItem);

//CREATE A NEW ITEM
itemRouter.post('/new', itemControllers.createItem);

export default itemRouter;

