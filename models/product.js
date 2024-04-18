const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: [
    {
      name: {
        type: String,
        required: true,
      },
      images: [String],
    },
  ],
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Product", productSchema);
