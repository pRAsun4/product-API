const product = require("../models/product");

// const getAllProducts = (req, res) => {
//     const myData =  product.find({});
//     res.status(200).json({ myData });
// }

const getAllProducts = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryObject = {};

  let apiData = product.find( queryObject);

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit)
  
  if(sort){
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if(select){
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);

  try {
    const myData = await apiData;
    res.json(myData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllProductsTesting = async (req, res) => {
  const myData = await product.find(req.query).sort("-name");

  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
