const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/product.controller");

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/add", createProduct);

module.exports = router;
