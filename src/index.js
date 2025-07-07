import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

//dot env config
dotenv.config({
  path: "./env",
});

//connecting data base
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MogodB index connection failed !!!", err);
  });

const app = express();
