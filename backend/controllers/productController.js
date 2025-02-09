const Product = require('../models/product');

const getProducts = async (req, res) => {
  const products = await Product.find().populate('seller', 'name email');
  res.json(products);
};

const addProduct = async (req, res) => {
  const { name, description, price, seller } = req.body;

  const product = await Product.create({
    name,
    description,
    price,
    seller,
  });

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400).json({ message: 'Invalid product data' });
  }
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('seller', 'name email');

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { getProducts, addProduct, getProductById };