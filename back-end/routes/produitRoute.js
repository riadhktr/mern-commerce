const express= require ('express');
const { addProduct, updateProduct, listProduct, deleteProduct } = require('../controllers/adminController');
const {isAuthenticate } = require('../middelware/isAuth');
const {notFound ,errorHandler} = require('../middelware/Errors');
const productRoutes =express.Router();
productRoutes.post('/addProduct',isAuthenticate,addProduct);
productRoutes.put('/updateProduct/:id',isAuthenticate,updateProduct);
productRoutes.get('/listProduct',isAuthenticate,listProduct);
productRoutes.delete('/deleteProduct/:id',isAuthenticate,deleteProduct)

module.exports = productRoutes;