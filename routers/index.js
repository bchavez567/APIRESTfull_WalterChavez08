const express = require('express');
const productsRoutes = require('./products/products.routes');

const router = express.Router();

//MIDDLEWARES
router.use(express.json());
router.use(express.urlencoded({extended: true}));


//ROUTES
router.use('/products', productsRoutes);

module.exports = router;
