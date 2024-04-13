const product = require("../models/product");

// const getAllProducts = (req, res) => {
//     const myData =  product.find({});
//     res.status(200).json({ myData });
// }

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllProductsTesting = async (req, res) => {
  const myData = await product.find(req.query);

  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
