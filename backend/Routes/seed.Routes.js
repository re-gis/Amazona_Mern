import express from "express";
import data from "../data.js";
import Product from "../Models/product.model.js";
import User from "../Models/user.Model.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  const createdUsers = await User.insertMany(data.users);

  return res.send({ createdProducts, createdUsers });
});

export default seedRouter;
