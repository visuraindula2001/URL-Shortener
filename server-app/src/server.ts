import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();

app.get("/",(rq,res) =>{
    res.send("Hello world");
})

app.listen(port,() =>{
    console.log(`Server started successfully on port :${port}`);
})

