import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import "dotenv/config"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
    // return jwt.sign({ id },"Prabin");
}

const registerUser = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const userExist = await userModel.findOne({ email });

        if (userExist) {
            return res.json({ success: false, message: "User already exists!" });
        }

        if (!validator.isEmail(email))
            return res.json({ success: false, message: "Invalid Email!" });

        if (password.length < 8)
            return res.json({ success: false, message: "Password must be of more than 8 characters!" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            username: username,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user)
            return res.json({ success: false, message: "User doesn't exists." });

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched)
            return res.json({ success: false, message: "Invalid Credentials." });

        const token = createToken(user._id);

        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error!" });

    }

}

export { registerUser, loginUser };