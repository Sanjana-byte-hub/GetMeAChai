<<<<<<< HEAD
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String },
    amount: { type: Number,required:true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
    done:{type:Boolean,default:false},
})

=======
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String },
    amount: { type: Number,required:true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    
    done:{type:Boolean,default:false},
})

>>>>>>> 596f450929b3e7b8b3e9e131ff9b69202ef0b17b
export default mongoose.models. Payment||  model( "Payment",  PaymentSchema);