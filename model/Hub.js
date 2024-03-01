import mongoose from "mongoose";

const HubSchema =  new mongoose.Schema({
    hubName:{
        type:String,
        required:true
    },
    hubLocation:{
        type:String,
        required:true
    },
    Products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }],
    pinCode:{
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    }
});

const Hub =  mongoose.model("Hub",HubSchema);
export default Hub;