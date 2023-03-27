const express= require ('express');

const orderRoutes =express.Router();


const { addOrderItems, getOrderById, getOrders, updateOrderToPaid, getMyOrders} = require('../controllers/orderController');
const {isAuthenticate } = require('../middelware/isAuth');




orderRoutes.post('/addOrder',isAuthenticate,addOrderItems);
orderRoutes.get('/order/:id',isAuthenticate,getOrderById);
orderRoutes.get('/myorders',isAuthenticate,getMyOrders);

orderRoutes.get('/listOrder',isAuthenticate,getOrders);
orderRoutes.put('/:id/pay',isAuthenticate,updateOrderToPaid);

module.exports = orderRoutes;
