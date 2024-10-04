import mongoose from "mongoose";

export const ConnectToDB = async () => {
    await mongoose.connect("mongodb+srv://acharyaprabin1025y:prabin1025y@cluster0.wt6fq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("Connected to database successfully");
    });
}