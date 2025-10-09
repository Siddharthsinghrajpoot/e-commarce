import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import connectCloudinary from "./config/cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON (optional but common)

connectCloudinary();
app.use(express.json());

// Basic route
app.use("/api/user",userRoutes)
app.use("/api/products",productRoutes)

// Connect to DB and then start server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("Failed to connect to DB", err);
});

