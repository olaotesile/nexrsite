"use client";

import React from "react";
import { FaBriefcase, FaUsers, FaRobot, FaRocket } from "react-icons/fa"; // Import icons from react-icons

export default function MoreThanApp() {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{
        backgroundImage: "url('/Main3.png')", // Background image from the public folder
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          We&apos;re More Than Just an App
        </h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          At Nexr, we&apos;ve discovered a problem and built a solution. This
          isn&apos;t just a platform—it&apos;s a shift in how creators
          collaborate, showcase, and grow. It&apos;s where real work speaks
          louder than polished profiles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <FaBriefcase className="h-8 w-8 text-white" />,
            title: "See the Actual Work, Not Just Words",
            desc: `Unlike LinkedIn or resumes, Nexr lets people view real projects, code, and contributions—no fluff, no exaggeration, just proof.`,
          },
          {
            icon: <FaUsers className="h-8 w-8 text-white" />,
            title: "Know Who Did What (Exactly)",
            desc: `Nexr shows each team member\'s specific roles, contributions, and skills in a project. No more guessing who actually did the work.`,
          },
          {
            icon: <FaRobot className="h-8 w-8 text-white" />,
            title: "Built-in AI to Do the Heavy Lifting",
            desc: `Nexr isn\'t just a portfolio—it\'s your project assistant. It auto-generates roadmaps, summarizes tasks, and gives updates as you build.`,
          },
          {
            icon: <FaRocket className="h-8 w-8 text-white" />,
            title: "One Home for All Your Creative Work",
            desc: "It combines GitHub\'s collaboration, LinkedIn's profile system, and Notion\'s project management—but made for all creators.",
          },
          {
            icon: <FaBriefcase className="h-8 w-8 text-white" />,
            title: "Your Projects = Your Resume (Automatically)",
            desc: "Every project you join auto-updates your profile. Employers see what you\'ve done, not just what you claim.",
          },
          {
            icon: <FaRocket className="h-8 w-8 text-white" />,
            title: "No Noise, Just Innovation",
            desc: "No likes, no follows, no clout-chasing. Nexr is signal over noise—built for people who create, not just curate.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: "#0d1a30" }} // Background color for each card
            className="border border-white/10 rounded-2xl p-6 shadow-md text-white"
          >
            <div className="mb-4">{item.icon}</div> {/* Updated icon here */}
            <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
            <p className="text-white/80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
