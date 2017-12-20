import * as express from "express";
import * as passport from "passport";
import * as itemControllers from "../actions/item";

const router = express.Router();

//GET ALL ITEMS
router.get('/all', itemControllers.getAll);

//MODIFY AN EXISTING ITEM
//router.post('/update/:projectId', itemControllers.updateItem);

//CREATE A NEW ITEM
router.post('/new', itemControllers.createItem);

export { router };

