import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(v);
            },
            message: props => `${props.value} is not a valid Gmail address!`
        }
    },
    userPassword:{
        type:String,
        required:true
    },
    userMobile: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    userLocation:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default :"user"
    }
});

const User = mongoose.model("User",userSchema);
export default User;