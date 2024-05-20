import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors';
import errorHandler from './middleware/errorMidlleware';
dotenv.config()
const app = express();

app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(cookieParser());
app.use(express.json());


app.use('/api/user', userRoutes);
app.use(errorHandler)

const dbUrl: string = process.env.DB_URL || " ";
const port: number = parseInt(process.env.PORT || "3200");

mongoose.connect(dbUrl).then(()=>{
  console.log("Database connected");
  
})

app.listen(port, ()=>{
  console.log("server is running at 3200 port");
  
})