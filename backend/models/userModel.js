import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cartItems: { type: Object, default: {} }
}, { minimize: false });

const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel;