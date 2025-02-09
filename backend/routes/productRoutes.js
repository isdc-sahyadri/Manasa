const express = require('express');
const { getProducts, addProduct, getProductById } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.get('/:id', getProductById);

module.exports = router;