import express from "express";
import { getItems, createItems } from "./controller/itemsController.js";
import { getCart, createCart, findItems } from "./controller/cartController.js";
import { getCustomer, createCustomer } from "./controller/customerContoller.js";
import { getPayment, createPayment } from "./controller/paymentContoller.js";

const route = express.Router()

//get all The Data
route.get('/getItems', getItems);
route.get('/getCarts', getCart);
route.get('/getCust', getCustomer);
route.get('/getpay', getPayment)

//post all the data
route.post('/postItems', createItems);
route.post('/postCarts', createCart);
route.post('/postCust', createCustomer);
route.post('/postPay', createPayment)

//find all the data
route.get('/findItems/:id', findItems)

export default route