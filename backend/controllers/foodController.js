import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {

    let image_fileName = `${req.file.filename}`;

    const newFood = new foodModel({
        foodName: req.body.foodName,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_fileName
    });
    try {
        await newFood.save();
        res.json({ success: true, message: "Food saved successfully." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!!" });
    }
}

const listFood = async (req, res) => {
    try {
        const data = await foodModel.find({});
        res.json({ success: true, data: data });

    } catch (error) {
        console.log(error);
        res.json({ success: true, message: "Error!!" });
    }
}

const removeFood = async (req, res) => {
    try {
        const foodToBeRemoved = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${foodToBeRemoved.image}`);

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "food removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error while deleting file." });
    }
}

export { addFood, listFood, removeFood };