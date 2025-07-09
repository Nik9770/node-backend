import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
const app = express();

//cors
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
//json reading
app.use(express.json({ limit: "16kb" }));
//url se jo data aata h encoded
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//to access public files
app.use(express.static("public"));
//cookie parser
app.use(cookieParser());

//routes declaration
app.use("/api/v1/users", userRouter);

export { app };
