import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.DB_URL);

const Db = mongoose.connection;
 Db.on('error',(err)=>console.log("There is Error in Db ",err));
 Db.on('open',()=>console.log("Database Connected"));

 export default Db;