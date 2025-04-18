"use client";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen overflow-x-hidden"
      style={{ backgroundImage: "url(/Main.png)" }}
    >
      <div className="absolute inset-0 flex justify-center items-center text-white">
        <div className="text-center p-6">
          {/* Heading for Desktop and Mobile */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="block md:inline">Build &middot; </span>
            <span className="text-blue-400">
              <Typewriter
                words={["Collaborate", "Showcase", "Inspire", "Connect"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <br />
            <span className="block md:inline">&middot; Innovate</span>
          </h1>

          {/* Buttons section */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300 text-xs sm:text-sm md:text-base">
              Join our waitlist 100% free
            </button>
            <button className="px-3 py-1 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition duration-300 text-xs sm:text-sm md:text-base">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
