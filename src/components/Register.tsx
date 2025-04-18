"use client";

import React from "react";

export default function Register() {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 sm:py-20"
      style={{ backgroundImage: "url('/Main.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Side - Announcement */}
        <div className="text-center sm:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
            We're going live soon
          </h2>
          <p className="mt-4 text-md text-white/80">
            Be the first to join Nexr and experience a new way to build,
            showcase, and connect.
          </p>
        </div>

        {/* Right Side - Register Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Register Your Interest
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <textarea
              placeholder="Why you're excited about Nexr (optional)"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
              rows={3}
            />
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/90 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
