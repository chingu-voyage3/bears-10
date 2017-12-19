import * as express from "express";
import * as passport from "passport";
import * as itemControllers from "../actions/item";

const router = express.Router();

router.post('/create-item', itemControllers.createItem);

module.exports = router;

