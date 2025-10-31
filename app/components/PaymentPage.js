"use client"
import React,{useEffect, useState} from 'react'
import Script from 'next/script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSession } from 'next-auth/react'
import { fetchuser,fetchpayments,initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

const PaymentPage = ({ username }) => {
    //const {data:session } = useSession()
   
    const [paymentform, setPaymentform] = useState({ name:"",message:"",amount:"" })
    const [currentUser, setcurrentUser] = useState({ })
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

  useEffect(()=>{
  const loadData = async () => {
    if (username) {
      await getData();
      const paymentsData = await fetchpayments(username);
      setPayments(paymentsData || []);
    }
  };
  loadData();
}, [username]);

 useEffect(() => {
  const checkPayment = async () => {
    if (searchParams.get("paymentdone") === "true") {
      toast.success("Thanks for your donation!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });

      
      const newPayments = await fetchpayments(username);
      setPayments(newPayments);

      
      router.replace(`/${username}`);
    }
  };

  checkPayment();
}, [searchParams, router, username]);


    const handleChange = (e)=>{
setPaymentform({...paymentform,[e.target.name]:e.target.value})

    }

    const getData= async (params)=>{
      let u = await fetchuser(username)
if (!u) {
  console.warn(`User "${username}" not found`);
  toast.error("This page does not exist!");
  return;
}
setcurrentUser(u)

    }


  const pay = async (amount) => {
  try {
    let a = await initiate(amount, username, paymentform);
    
    const orderId = a.id;

    const options = {
      key: currentUser.razorpayid,
      amount:amount,
      currency: "INR",
      name: "Get Me A Chai",
      description: "Support your creator",
      image: "https://example.com/your_logo",
      order_id: orderId,
      //callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
     callback_url: "https://get-me-a-chai-obv5.vercel.app/api/paymentverify",
redirect: false,

     prefill: {
  name: paymentform.name || "Anonymous",
  email: "gaurav.kumar@example.com",
  contact: "+919876543210",
 
},

      notes: { address: "Razorpay Corporate Office" },
      theme: { color: "#3399cc" },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (err) {
    console.error("Payment error:", err);
    alert("Payment failed. Check console for details.");
  }
};




    return (
        <>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
{currentUser && currentUser.coverpic ? (
  <div className="cover w-full relative">
    <img
      className="object-cover w-full h-[48] md:h-[400px]"
      src={currentUser.coverpic}
      alt="Cover"
    />
    <div className="absolute -bottom-20 md:right-[46%] right-[38%] border-white border-2 rounded-full overflow-hidden size-36">
      <img
        className="rounded-full object-cover size-36 w-[150px] h-[150px]"
        src={currentUser.profilepic || "/default-avatar.jpg"}
        alt="Profile"
      />
    </div>
  </div>
) : (
  <div className="w-full h-[400px] bg-gray-800 animate-pulse rounded-md"></div>
)}
     
            <div className=" my-24 info flex justify-center items-center flex-col ">
                <div className='  font-bold text-white text-lg '>@{username}</div>

                <div className='text-slate-400'>Lets help {username} get a chai!</div>
                <div className='text-slate-400'>{payments.length} payments .  ₹{payments.reduce((a,b)=>a+b.amount,0)} raised</div>
                <div className=" mt-11  payment flex gap-3 w-[80%] flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all supporters */}
                        <h2 className='text-2xl font-bold my-5'> Top-10 Supporters</h2>
                        <ul className='mx- text-lg'>
                            {payments.length==0 && <li>😒No payments yet</li>}
                            {payments.map((p,i)=>{
return  <li key={i} className='my-4 flex gap-2 items-center'>
                                <img className="h-10  rounded-full w-10" src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80" />
                                <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span></li>
                            })}
                           
                            
                            
                        </ul>
                    </div>
                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* input for name and message */}
                            <div>
                             <input onChange={handleChange} value={paymentform.name} name="name"type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter name' /></div>
                            <input onChange={handleChange} value={paymentform.message}name="message" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter message' />
                            <input onChange={handleChange} value={paymentform.amount} name="amount"type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter amount' />
                            <button onClick={() =>pay(Number.parseInt(paymentform.amount)*100)} type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-200" disabled={paymentform.name?.length<3 ||paymentform.message?.length<4 || paymentform.amount?.length<1}>Pay</button>
                        </div>
                        {/* or choose form these amounts  */}
                        <div className="flex flex-col md:flex-row gap-2 mt-5">
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage

