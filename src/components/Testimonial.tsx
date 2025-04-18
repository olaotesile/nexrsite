"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: " B.",
    role: "Software Engineer, Euretix",
    quote:
      "Nexr made it easy to showcase my real skills. It’s like GitHub and LinkedIn finally got it right.",
    image: "/person1.jpg",
  },
  {
    name: "Victor F",
    role: "Founder, Chainroll ",
    quote:
      "Hiring through Nexr saved us tons of time and money. Seeing real and verified contributions meant no guesswork.",
    image: "/person2.jpg",
  },
  {
    name: "Inioluwa F.",
    role: "UI/UX Designer at Nvidia",
    quote:
      "I have social anxiety and used to struggle showing what I could do — now my projects speak for themselves.",
    image: "/person3.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000); // switch every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What People Are Saying
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-white px-6"
          >
            <p className="text-xl md:text-2xl italic mb-6">
              “{testimonials[current].quote}”
            </p>
            <div className="font-semibold text-lg">
              {testimonials[current].name}
            </div>
            <div className="text-sm text-white/80">
              {testimonials[current].role}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots with avatars or placeholders */}
        <div className="mt-10 flex justify-center gap-4">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-10 w-10 rounded-full overflow-hidden border-2 ${
                current === index ? "border-white" : "border-white/40"
              } transition-all duration-300`}
            >
              <img
                src={t.image || "/placeholder.jpg"} // fallback placeholder image if no avatar
                alt={t.name}
                className="object-cover h-full w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement; // Typecast to HTMLImageElement
                  target.setAttribute("src", "/placeholder.jpg");
                }} // handle missing images
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
