import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    await connectDB();

    
    let body = await req.json();
 

    
    let payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
      return NextResponse.json({
        success: false,
        message: "Order ID not found",
      });
    }
    
    
let user = await User.findOne({username:payment.to_user})
const secret = user.razorpaysecret

    const isValid = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
      },
      body.razorpay_signature,
     secret

    );

    if (isValid) {
      const updatedPayment = await Payment.findOneAndUpdate(
        { oid: body.razorpay_order_id },
        { done: true },
        { new: true }
      );

     return NextResponse.redirect(
  `https://get-me-a-chai-obv5.vercel.app/${updatedPayment.to_user}?paymentdone=true`
);



    } else {
      return NextResponse.json({
        success: false,
        message: "Payment verification failed",
      });
    }
  } catch (error) {
    console.error("Razorpay route error:", error);
    return NextResponse.json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
