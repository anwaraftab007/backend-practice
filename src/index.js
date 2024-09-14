import mongoose from "mongoose";
import dotenv from "dotenv";
import {app} from "./app"

import connectDB from "./db/index.js";

connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on Port : ${process.env.PORT}`);
        })
    }
)
.catch((err)=>{
    console.error(err);
})


dotenv.config({
    path: "./.env",
})