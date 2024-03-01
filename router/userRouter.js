import express from 'express';
import userController from '../controller/userController.js';
import varifyToken  from '../config/VarifyToken.js'

const {SignUp,loginUser,approvalOrder,searchNearByProduct} = new userController();

const router =  express.Router();
router.post('/signup',SignUp);
router.post('/login',loginUser);
router.post('/order/approval/:id',varifyToken,approvalOrder);
router.get('/nearByProduct',varifyToken,searchNearByProduct)


export default router;