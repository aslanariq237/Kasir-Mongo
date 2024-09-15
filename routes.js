import express from "express";
import { getItems } from "./controller/itemsController.js";

const route = express.Router()

route.get('/getItems', getItems);

export default route