"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    setIsFormValid(name !== "" && email !== "" && /\S+@\S+\.\S+/.test(email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 sm:py-20"
      style={{ backgroundImage: "url('/Main.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Side - Announcement */}
        <motion.div
          className="text-center sm:text-left"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold leading-tight text-white">
            We're going live soon
          </h2>
          <p className="mt-4 text-md text-white/80">
            Be the first to join Nexr and experience a new way to build,
            showcase, and connect.
          </p>
        </motion.div>

        {/* Right Side - Register Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-lg"
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Register Your Interest
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="full-name" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  validateForm();
                }}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateForm();
                }}
              />
            </motion.div>

            {/* Why you're excited about Nexr */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="message" className="sr-only">
                Why you're excited about Nexr
              </label>
              <textarea
                id="message"
                placeholder="Why you're excited about Nexr (optional)"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40 resize-none"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`w-full bg-white text-black font-semibold py-3 rounded-xl transition duration-300 ${
                isFormValid
                  ? "hover:bg-white/90"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              Register
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
