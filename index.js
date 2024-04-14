const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api server!!!!!!!!!");
});

mongoose
  .connect(
    "mongodb+srv://rathanvishnu6999:rathan@backenddb.mjdx4au.mongodb.net/simple-crud?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to mongo db");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => console.log("failed"));
