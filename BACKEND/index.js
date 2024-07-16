import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
app.use(cors());

const corsOptions = {
  origin: process.env.CORS,
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());


app.use('/book', bookRoute); 
app.use('/user',userRoute);



mongoose.connect(MONGODB_URI, {

})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
