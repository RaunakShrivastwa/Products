import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    orderStatus:{
        type:String,
        default:"pending"
    },
    orderQuantity:{
        type:Number,
        required:true
    }
});

const Order = mongoose.model("Order",orderSchema);
export default Order;