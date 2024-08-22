import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import cors from "cors";
import userRoute from "./Route/user.route.js";
import path from "path"
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI ;
const app = express();
app.use(cors());
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1,"/Frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname1, "Frontend","build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

const corsOptions = {
  origin: process.env.CORS,
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());

app.use('/book', bookRoute); 
app.use('/user',userRoute);



mongoose.connect(URI, {

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
