import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/health", (req, res)=>{
    res.status(200).json({message:"API is up and running."});
})


const serverStart = async() => {
    try {
        await connectDB();
        app.listen(ENV.PORT, ()=> console.log("Server running on port:", ENV.PORT))
    } catch (error) {
        console.error("💣 Error occured while connecting server.", error)
    }
};

serverStart();