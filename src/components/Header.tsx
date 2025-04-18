"use client"; // Add this at the very top of your file

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // If you want to use an icon
import Image from "next/image"; // For Next.js Image optimization

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-10 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      {/* Centered nav links with glass effect (Desktop) */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 px-6 py-2 rounded-[15px] shadow-md space-x-6 text-sm md:text-base">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Why us
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Register
        </a>
      </nav>

      {/* "Coming Soon" Box (Desktop) */}
      <div className="text-xs md:text-sm bg-[#0a0c31] px-4 py-2 rounded-4xl hidden md:block">
        Coming Soon
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="md:hidden flex items-center space-x-4">
        {/* "Coming Soon" button visible on mobile */}
        <div className="text-xs md:text-sm bg-[#0a0c31] px-4 py-2 rounded-4xl">
          Coming Soon
        </div>

        {/* Hamburger Button */}
        <button onClick={toggleMenu}>
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`absolute top-0 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 px-6 py-4 rounded-[15px] shadow-md flex flex-col space-y-4 md:hidden transition-all ease-in-out duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Projects
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    </header>
  );
}
