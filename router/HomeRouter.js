import express from 'express';
import userRouter from './userRouter.js';
import productRouter from './productRouter.js'
import orderRouter from './orderRouter.js';
import hubRouter from './hubRouter.js';

const router =  express.Router();

router.use('/user',userRouter);
router.use('/product',productRouter);
router.use('/order',orderRouter);
router.use('/hub',hubRouter);


export default router;