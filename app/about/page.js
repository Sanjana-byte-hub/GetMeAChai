"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        About Get Me a Chai ☕
      </h1>

      <p className="text-slate-300 max-w-3xl text-center text-lg leading-relaxed">
        Get Me a Chai is a platform built to help creators, developers, and
        freelancers receive small donations from their supporters — just like
        buying them a cup of chai! It’s a simple way to appreciate people for
        their work, creativity, and time. ❤️
      </p>

      <div className="max-w-4xl mt-16">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">🌟 Our Purpose</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          The goal of this project is to make supporting creators easy and
          transparent. Whether you're a developer sharing open-source projects,
          a designer posting your art, or a teacher creating tutorials — you
          deserve a little chai from those who love your work.
        </p>
      </div>

      <div className="max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">⚙️ How It Works</h2>
        <ul className="text-slate-400 list-disc list-inside space-y-2">
          <li>Users log in securely using GitHub authentication.</li>
          <li>
            They can set up their own personalized page with a username, cover
            photo, and Razorpay payment setup.
          </li>
          <li>
            Supporters can visit that page and donate directly with a message.
          </li>
          <li>
            All transactions are safe, handled using Razorpay’s payment gateway.
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">🧠 Technologies Used</h2>
        <ul className="text-slate-400 list-disc list-inside space-y-2">
          <li><span className="text-white font-medium">Next.js 14</span> — For building the frontend and backend in one framework.</li>
          <li><span className="text-white font-medium">Tailwind CSS</span> — For modern, responsive, and utility-first styling.</li>
          <li><span className="text-white font-medium">NextAuth.js</span> — For secure authentication using GitHub.</li>
          <li><span className="text-white font-medium">Razorpay API</span> — For handling payments and donations.</li>
          <li><span className="text-white font-medium">MongoDB</span> — For storing user data and donation records.</li>
        </ul>
      </div>

      <div className="max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">☕ Why “Get Me a Chai”?</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          “Buy me a coffee” is a popular concept worldwide — but since we love
          chai more, this version adds a personal and cultural twist. The idea
          is simple: even a small contribution can make a big difference when it
          comes from the heart.
        </p>
      </div>

      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">❤️ A Small Project with Big Heart</h2>
        <p className="text-slate-400 text-base leading-relaxed">
          This project is built with passion and curiosity — to learn, share,
          and make something meaningful. Thank you for supporting creators and
          helping them continue doing what they love.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
