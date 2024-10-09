import mongoose from "mongoose";

export const ConnectToDB = async () => {
    await mongoose.connect(process.env.MONGODB).then(() => {
        console.log("Connected to database successfully");
    });
}