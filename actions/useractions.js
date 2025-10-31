"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  try {
    await connectDB();
    
    let user = await User.findOne({username:to_username})
    const secret = user.razorpaysecret
    

    
    const instance = new Razorpay({
      key_id: user.razorpayid,
      key_secret:secret,
    });

    
    const options = {
      amount: Number.parseInt(amount), 
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    
    const order = await instance.orders.create(options);

    
    await Payment.create({
      oid: order.id,
      amount:amount/100,
      to_user: to_username,
      name: paymentform.name || "Anonymous",
      message: paymentform.message || "",
      done: false,
    });


    return {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status,
    };
  } catch (error) {
    console.error("Razorpay Initiate Error:", error);
    throw new Error("Payment initiation failed");
  }
};

export const fetchuser = async (username) => {
  await connectDB();
  const u = await User.findOne({ username }).lean(); 
  if (!u) return null;

  
  return {
    ...u,
    _id: u._id.toString(),
    createdAt: u.createdAt?.toString(),
    updatedAt: u.updatedAt?.toString(),
  };
};

export const fetchpayments = async (username) => {
  await connectDB();
  const payments = await Payment.find({ to_user: username ,done:true})
    .sort({ amount: -1 }).limit(10)
    .lean();

 
  return payments.map((p) => ({
    ...p,
    _id: p._id.toString(),
    oid: p.oid?.toString(),
    createdAt: p.createdAt?.toString(),
 
  }));
  };
  export const updateProfile = async (data,oldusername)=>{
    await connectDB()
    let ndata = data
    if (oldusername!== ndata.username){
        let u = await User.findOne({username:ndata.username})
        if(u){
            return{error:"username already exists"}
        }
        await User.updateOne({email:ndata.email},ndata)
        await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})
    }
    else{
await User.updateOne({email:ndata.email},ndata)
    }

  }
 


