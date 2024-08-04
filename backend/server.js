import express from "express";
import cors from 'cors';



//app config
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Api working fine");
});

app.listen(PORT,()=>{
    console.log(`Listening to port number ${PORT}`);
})