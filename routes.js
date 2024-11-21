import express from "express";
import multer from "multer";
import { getItems, createItems } from "./controller/itemsController.js";
import { getCart, createCart, findItems, deleteItems } from "./controller/cartController.js";
import { getCustomer, createCustomer } from "./controller/customerContoller.js";
import { getPayment, createPayment } from "./controller/paymentContoller.js";

const route = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/"); // Path where the image will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname); // Unique filename for the image
    },
});

const upload = multer({storage})

route.get('/getItems', getItems);
route.get('/getCarts', getCart);
route.get('/getCust', getCustomer);
route.get('/getPay', getPayment)

//post all the data
route.post('/postItems', upload.single('file'), createItems);
route.post('/postCarts', createCart);
route.post('/postCust', createCustomer);
route.post('/postPay', createPayment)

//find all the data
route.get('/findItems/', findItems)
route.delete('/deleteCarts', deleteItems);

export default route