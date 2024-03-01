import express from 'express';
import productController from '../controller/productController.js';
import VarifyToken from '../config/VarifyToken.js'

const {createProduct,deleteProduct,getSingleProduct,getAllProducts} = new productController();

const router =  express.Router();
router.post("/create",VarifyToken,createProduct);
router.get("/getAllProducts",VarifyToken,getAllProducts);
router.get("/getSingle/:id",VarifyToken,getSingleProduct);
router.delete("/delete/:id",VarifyToken,deleteProduct)

export default router