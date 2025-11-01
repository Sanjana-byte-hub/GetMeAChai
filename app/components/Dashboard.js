"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Dashboard = () => {
  const { data: session, update } = useSession(); 
  const router = useRouter();

  const [form, setform] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [router, session]);

  const getData = async () => {
    if (!session?.user?.name) return;

    let u = await fetchuser(session.user.name);

    if (!u) {
      console.warn("User not found, maybe session mismatch?");
      toast.error("User data not found!");
      return;
    }

    setform(u);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateProfile(form, session.user.name);

    if (res?.error) {
      toast.error(res.error, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    toast.success("Profile updated!", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
      transition: Bounce,
    });

   
    await update({
      name: form.username,
      email: form.email,
      image: form.profilepic,
    });

    
    if (form.username && form.username !== session.user.name) {
      setTimeout(() => {
        router.push(`/${form.username}`);
      }, 1000);
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
      <div className="container mx-auto py-5 px-6">
        <h1 className="text-white text-center font-bold text-4xl">
          Welcome to your dashboard
        </h1>
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          {/* name */}
          <div className="my-2">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              value={form.name || ""}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter name"
              id="name"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* email */}
          <div className="my-2">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={form.email || ""}
              onChange={handleChange}
              type="text"
               placeholder="Enter Email"
              name="email"
              id="email"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* username */}
          <div className="my-2">
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={form.username || ""}
              onChange={handleChange}
              type="text"
              placeholder="Enter username "
              name="username"
              id="username"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* profilepic */}
          <div className="my-2">
            <label
              htmlFor="profilepic"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Profile Picture
            </label>
            <input
              value={form.profilepic || ""}
              onChange={handleChange}
              type="text"
               placeholder="Enter PRofilepic urr"
              name="profilepic"
              id="profilepic"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* coverpic */}
          <div className="my-2">
            <label
              htmlFor="coverpic"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Cover Picture
            </label>
            <input
              value={form.coverpic || ""}
              onChange={handleChange}
              type="text"
              placeholder="Enter coverpic url"
              name="coverpic"
              id="coverpic"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* razorpay id */}
          <div className="my-2">
            <label
              htmlFor="razorpayid"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Razorpay ID
            </label>
            <input
              value={form.razorpayid || ""}
              onChange={handleChange}
              type="text"
               placeholder="Enter razorpay id"
              name="razorpayid"
              id="razorpayid"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* razorpay secret */}
          <div className="my-2">
            <label
              htmlFor="razorpaysecret"
              className="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret || ""}
              onChange={handleChange}
              type="text"
               placeholder="Enter razorpay secret"
              name="razorpaysecret"
              id="razorpaysecret"
              className="block w-full p-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
