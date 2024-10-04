import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});
//Schema is like the blueprint that needs to be followed while storing in database


//models are used to create and store data using the specified schema
const productModel = mongoose.models.productModel || mongoose.model("productModel", productSchema);
//same as
//const foodModel = mongoose.models.foodModel ? mongoose.models.foodModel : mongoose.model("foodModel", foodSchema);

export default productModel;