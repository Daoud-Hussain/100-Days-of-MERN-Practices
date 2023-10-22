const Product = require("../models/Product");

const getAllProducts  = (req, res)=>{
    res.send("This is products from controllers");
}

const getTestProduct = async (req, res) =>{
    // const product = new Product({
    //         name: "Daoud Hussain",
    //         rollno: "SP21-BCS-102"
    // });
    // await product.save();
    res.send("This is a product test ");
}

module.exports = {getAllProducts, getTestProduct};