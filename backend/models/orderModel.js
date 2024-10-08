import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    orderItems: { type: Object, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Order Processing." },
    date: { type: Date, default: Date.now() },
    payment: { type: String, required: true },
    "payment-details":{type:Object}
});

const orderModel = mongoose.models.orderModel || mongoose.model("orderModel", orderSchema);

export default orderModel;