const getAllProducts = (req, res) => {
    res.status(200).json({msg:"i am get all products"});
}

const getAllProductsTesting = (req, res) => {
    res.status(200).json({msg:"i am get all products testing"});
}

module.exports = {getAllProducts, getAllProductsTesting};