import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


const placeOrder = async (req, res) => {
    try {

        const image_fileName = req.file ? req.file.filename : null;
        console.log(req.body);


        const newOrder = new orderModel({
            userId: req.body.userId,
            orderItems: JSON.parse(req.body.orderItems),
            amount: req.body.amount,
            address: JSON.parse(req.body.address),
            payment: req.body.payment,
            "payment-details": {
                ...JSON.parse(req.body['payment-details']),
                image: image_fileName
            }
        });

        if (req.body.payment === "cash-on-delivery") {
            console.log("going");

            newOrder['payment-details'] = {}
        }

        await newOrder.save();

        return res.json({ success: true, order: newOrder });
        // await userModel.findByIdAndUpdate(req.body.userId, { cartItems: {} });

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: "error" })
    }
};

const getOrders = async (req, res) => {
    try {

        const orders = await orderModel.find({ userId: req.body.userId });

        res.json({ success: true, orderItems: orders })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "internal server error!" });
    }
}

const deleteOrder = async (req, res) => {

    // const orders = await orderModel.find({ userId: req.body.userId });
    try {
        await orderModel.findByIdAndDelete(req.body.orderId);
        // console.log(req.body.orderIdD);
        
        res.json({ success: true });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal Server Error!" });

    }

}

export { placeOrder, getOrders, deleteOrder };