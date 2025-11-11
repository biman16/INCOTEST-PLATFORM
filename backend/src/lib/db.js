import mongoose, { connect } from "mongoose";
import { ENV } from "./env.js"; 

export const connectDB = async() => {
    try {
        await mongoose.connect(ENV.DB_URL);
        console.log("✅ Database Connected successfully.")
    } catch (error) {
        console.error("❌ Database Connection failed: ", error);
        process.exit(1);
    }
};