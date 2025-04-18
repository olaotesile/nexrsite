import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-3">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Media Section */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com" className="hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2025 Nexr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
