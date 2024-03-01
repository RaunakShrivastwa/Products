import express from 'express';
import orderController from '../controller/orderController.js';
import VarifyToken from '../config/VarifyToken.js'
const {createOrder,getOrderById} = new orderController();

const router =  express.Router();
router.post("/create",VarifyToken,createOrder);
router.get("/getOrderById",VarifyToken,getOrderById)

export default router;