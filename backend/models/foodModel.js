import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    foodName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});
//Schema is like the blueprint that needs to be followed while storing in database


//models are used to create and store data using the specified schema
const foodModel = mongoose.models.foodModel || mongoose.model("foodModel", foodSchema);
//same as
//const foodModel = mongoose.models.foodModel ? mongoose.models.foodModel : mongoose.model("foodModel", foodSchema);

export default foodModel;