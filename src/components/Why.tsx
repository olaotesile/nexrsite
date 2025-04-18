"use client";
import { Briefcase, Users, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const hoverEffect = "hover:scale-[1.03] hover:shadow-2xl hover:border-white/40";

const employerItems = [
  {
    icon: <Briefcase className="h-8 w-8 text-white animate-pulse" />,
    title: "See creators' projects directly",
    description:
      "Instead of relying on just a resume, ensure you're hiring based on real work.",
  },
  {
    icon: <Users className="h-8 w-8 text-white animate-pulse" />,
    title: "Evaluate all-round skills",
    description:
      "Collaboration, time management, problem-solving — all in one place.",
  },
];

const creatorItems = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-white animate-pulse" />,
    title: "Stand out from fake creators",
    description: "Let your projects speak for themselves, not social noise.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-white animate-pulse" />,
    title: "Create ideas effortlessly",
    description:
      "Nexr's features boast of reducing time and effort by over 70%.",
  },
];

export default function Why() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/background2.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Why use Nexr?
        </motion.h2>

        {/* Employers */}
        <div className="mb-10">
          <h3 className="text-white text-xl font-semibold mb-6">
            For Employers
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {employerItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 h-56 shadow-md border border-white/20 transition-all duration-300 text-white ${hoverEffect}`}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creators */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            For Creators
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {creatorItems.map((item, idx) => (
              <motion.div
                key={idx}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 h-56 shadow-md border border-white/20 transition-all duration-300 text-white ${hoverEffect}`}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
