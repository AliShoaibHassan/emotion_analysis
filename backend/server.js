import express from "express";
import userRouter from "./routes/userRouter";


const app = express();

app.use('/api/users',userRouter);