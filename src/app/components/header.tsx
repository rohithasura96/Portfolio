"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#121213] w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 lg:px-6 relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <a href="/" className="hover:text-gray-600 text-neutral-50 flex items-center">
            <img
              src="/header-img.png"
              alt="Rohit Kumar - Web Developer"
              className="rounded-lg pr-2 max-w-16"
            />
            Enver
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-neutral-50" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-neutral-50" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`
            ${isMobileMenuOpen ? "block" : "hidden"} 
            absolute top-full left-0 w-full bg-[#121213] 
            md:static md:w-auto md:block
            text-neutral-400 text-[14px] z-40
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {[
              { href: "/", label: "Home" },
              { href: "/#services", label: "Services" },
              { href: "/#projects", label: "Our Project" },
              { href: "/#about", label: "About Us" }
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 px-4 hover:text-gray-300 text-center md:inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="/contact">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-neutral-50 flex bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 px-4 hover:bg-cyan-600"
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;