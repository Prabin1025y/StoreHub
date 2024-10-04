import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

// creates a router handler used to hit post and get requests
const foodRouter = express.Router();


//Image Storage system

//diskStorage is a function that lets us handle where and how the uploaded files are saved (images in this case).
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

//handling the file uploads
const upload = multer({ storage: storage });

//hitting post request using router and middleware upload
//upload.single function is getting the data from form of body from formfield named "image" , process it and store in desired location
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);


export default foodRouter;