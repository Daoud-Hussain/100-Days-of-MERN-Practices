const getAllProducts  = (req, res)=>{
    res.send("This is products from controllers");
}

const getTestProduct = (req, res) =>{
    res.send("This is a product test ");
}

module.exports = {getAllProducts, getTestProduct};