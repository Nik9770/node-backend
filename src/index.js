import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

//dot env config
dotenv.config({
  path: "./env",
});

//connecting data base
connectDB();

const app = express();
