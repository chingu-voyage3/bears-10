import { Router } from 'express';
import * as passport from 'passport';
import * as itemControllers from '../actions/item';

const itemRouter = Router();

// GET ALL ITEMS
itemRouter.get('/all', itemControllers.getAll);

// CREATE A NEW ITEM
itemRouter.post('/new', itemControllers.createItem);

// MODIFY AN EXISTING ITEM
itemRouter.post('/update/:itemId', itemControllers.updateItem);

// MODIFY AN EXISTING ITEM
itemRouter.delete('/delete/:itemId', itemControllers.deleteItem);

export default itemRouter;

