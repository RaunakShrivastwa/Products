import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productQuantity:{
        type: Number,
        required:true
    },
    hub:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Hub"
    }
});

const Product =  mongoose.model("Product",productSchema);
export default Product;