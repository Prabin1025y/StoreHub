import express from "express";
import { deleteOrder, getOrders, placeOrder } from "../controllers/orderController.js";
import isAuthenticated from "../middleware/authentication.js";
import multer from "multer";
import userModel from "../models/userModel.js";


const orderRouter = express.Router();


const transactionStorage = multer.diskStorage({
    destination: "uploads_transaction",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: transactionStorage });

orderRouter.post("/order", upload.single("image"), isAuthenticated, placeOrder);
orderRouter.post("/list", isAuthenticated, getOrders);
orderRouter.post("/delete", isAuthenticated, deleteOrder);

export default orderRouter;