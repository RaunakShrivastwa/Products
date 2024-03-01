import express from 'express';
import hubController from '../controller/hubController.js';
import VarifyToken from '../config/VarifyToken.js';
const {createNewHub,deleteHub,getAllHub,updateHub} = new hubController();


const router =  express.Router();
router.post('/create/Hub',VarifyToken,createNewHub)
router.get('/getAll/Hub',VarifyToken,getAllHub);
router.delete("/delete/Hub",VarifyToken,deleteHub);
router.put("/update/Hub",VarifyToken,updateHub);

export default router;