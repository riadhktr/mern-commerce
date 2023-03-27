
const express= require ('express');
const { register, login, updateUser, listUser, deleteUser } = require('../controllers/userController');
const {isAuthenticate } = require('../middelware/isAuth');
const { registerValidation, validation } = require('../middelware/RegisterValidation');

const userRoutes =express.Router();

userRoutes.post('/register',registerValidation,validation,register);
userRoutes.post('/login',login)
userRoutes.get('/profile',isAuthenticate,(req,res)=>
{
    const currentUser = req.user
    res.status(200).json({msg:"user logged in" ,currentUser})
})
userRoutes.put('/update/:id',isAuthenticate,updateUser)
userRoutes.get('/list',isAuthenticate,listUser)
userRoutes.delete('/delete/:id',isAuthenticate,deleteUser)
module.exports = userRoutes;