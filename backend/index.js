import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./Routes/seed.Routes.js";
import productRouter from "./Routes/product.Routes.js";
import userRouter from "./Routes/user.Routes.js";
import orderRouter from "./Routes/order.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGODB connected...");
  })
  .catch((error) => {
    console.log(error);
  });

// Accepting the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api to return the paypal client id
app.get("/api/keys/paypal", (req, res) => {
  return res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

// Routes //

// Seed routes
app.use("/api/seed", seedRouter);

// Product routes
app.use("/api/products", productRouter);

// User routes
app.use("/api/users", userRouter);

// Order routes
app.use("/api/orders", orderRouter);

// Error handler middleware
app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message });
});

// if (PORT) {
app.listen(PORT, () => {
  console.log("Server listening port 3000...");
});
// }

// export default app
