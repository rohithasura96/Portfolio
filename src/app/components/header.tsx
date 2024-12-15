"use client"; // Mark this as a client component

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#121213] w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-gray-600 text-neutral-50 flex items-center">
            <img
              src="/header-img.png" // Ensure the image is in the public folder
              alt="Rohit Kumar - Web Developer"
              className="rounded-lg pr-2 max-w-16"
            />
            Enver
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        

        {/* Navigation Menu */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-[#121213] md:static md:w-auto md:flex md:space-x-6 text-neutral-400 text-[14px]`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 hover:text-gray-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-4 hover:text-gray-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 px-4 hover:text-gray-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Project
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-4 hover:text-gray-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
         
        </nav>
        <div className="text-center mt-4 md:mt-0">
            <Link href="/contact">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-neutral-50 hidden md:flex bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 px-4 hover:bg-cyan-600"
              >
                Contact Us
              </button>
            </Link>
          </div>
          
      </div>
    </header>
  );
};

export default Header;
