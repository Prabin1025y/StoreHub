import express from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js";
import isAuthenticated from "../middleware/authentication.js";

const cartRouter = express.Router();

cartRouter.post("/add", isAuthenticated, addToCart);
cartRouter.post("/remove", isAuthenticated, removeFromCart);
cartRouter.post("/list", isAuthenticated, getCart);

export default cartRouter;