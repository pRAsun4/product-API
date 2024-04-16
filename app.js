require('dotenv').config();
const express = require("express");
const app = express();

const connectDb = require('./db/connect');

const PORT = process.env.PORT || 5000 ;

const products_route = require("./routes/products");

app.get("/", (req, res) => {
  res.send("hii.. i am live");
});

app.use("/", products_route);

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
