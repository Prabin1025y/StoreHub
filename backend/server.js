import express, { Router } from "express";
import cors from 'cors';
import { ConnectToDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



//app config
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());

//Connect to db
ConnectToDB();

//router endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get('/', (req, res) => {
    res.send("Api working fine");
});

app.listen(PORT, () => {
    console.log(`Listening to port number ${PORT}`);
})

//mongodb+srv://acharyaprabin1025y:<db_password>@cluster0.wt6fq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0