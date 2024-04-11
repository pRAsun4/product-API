const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000 ;

const products_route = require("./routes/products");

app.get("/", (req, res) => {
  res.send("hii.. i am live");
});

app.use("/api/products", products_route);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
