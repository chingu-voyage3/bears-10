import * as express from "express";
import * as passport from "passport";
import * as itemControllers from "../actions/item";

const router = express.Router();

router.get('/all', itemControllers.getAll);

router.post('/new', itemControllers.createItem);

export { router };

