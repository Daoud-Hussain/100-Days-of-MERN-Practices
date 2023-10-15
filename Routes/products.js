const express = require('express');
const router = express.Router();
const {getAllProducts, getTestProduct} = require("../Controllers/products");

router.route('/').get(getAllProducts);
router.route('/test').get(getTestProduct);

module.exports = router;