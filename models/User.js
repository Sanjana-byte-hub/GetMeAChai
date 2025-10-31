<<<<<<< HEAD
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String , required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid:{type:String},
    razorpaysecret:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

=======
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String , required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid:{type:String},
    razorpaysecret:{type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

>>>>>>> 596f450929b3e7b8b3e9e131ff9b69202ef0b17b
export default mongoose.models.User||model("User", UserSchema)