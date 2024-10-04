import productModel from "../models/productModel.js";
import fs from "fs";

const addProduct = async (req, res) => {

    let image_fileName = `${req.file.filename}`;

    const newProduct = new productModel({
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_fileName
    });
    try {
        await newProduct.save();
        res.json({ success: true, message: "product saved successfully." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!!" });
    }
}

const listProducts = async (req, res) => {
    try {
        const data = await productModel.find({});
        res.json({ success: true, data: data });

    } catch (error) {
        console.log(error);
        res.json({ success: true, message: "Error!!" });
    }
}

const removeProduct = async (req, res) => {
    try {
        const productToBeRemoved = await productModel.findById(req.body.id);
        console.log(req.body.id);
        
        fs.unlink(`uploads/${productToBeRemoved.image}`, ()=>{});

        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "product removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error while deleting file." });
    }
}

export { addProduct, listProducts, removeProduct };