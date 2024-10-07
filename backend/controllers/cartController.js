import userModel from "../models/userModel.js";


const addToCart = async (req, res) => {
    try {
        // const { token, items } = req.body;

        const user = await userModel.findOne({ _id: req.body.userId });
        const cartItems = await user.cartItems;

        if (!cartItems[req.body.itemId])
            cartItems[req.body.itemId] = 1;
        else
            cartItems[req.body.itemId]++;

        await userModel.findByIdAndUpdate(req.body.userId, { cartItems });

        res.json({ success: true, message: "Item Added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal Server Error" });

    }
}

const removeFromCart = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const cartItems = await user.cartItems;

        if (!cartItems[req.body.itemId] || cartItems[req.body.itemId] <= 0)
            return res.json({ success: false, message: "Item is not in the cart" });

        cartItems[req.body.itemId]--;

        await userModel.findByIdAndUpdate(req.body.userId, { cartItems });

        res.json({ success: true, message: "Item removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal Server Error" });
    }

}

const getCart = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        const cartItems = await user.cartItems;

        res.json({ success: true, cartItems });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Internal Server Error" });
    }
}

export { addToCart, removeFromCart, getCart };