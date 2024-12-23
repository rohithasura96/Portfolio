import Link from 'next/link'
import React from 'react'

const Footer = () => {
   

  return (
    <footer className=" py-8 ">
      <div className="container flex flex-col md:gap-0 md:flex-row md:justify-between items-center mx-auto px-4 text-center ">
        <div className="flex items-center justify-center  mb-4">
          <Link href="/" className="hover:text-gray-600 text-neutral-50 flex items-center">
            <img
              src="/header-img.png" // Ensure the image is in the public folder
              alt="Rohit Kumar - Web Developer"
              className="rounded-lg pr-2 max-w-16 h-12"
            />
            <span className="text-lg font-semibold">Enver</span>
          </Link>
        </div>
        <div className="flex  items-center flex-col md:gap-0 gap-6 lg:flex-row space-x-6 flex-wrap">
          <a href="#" className="text-gray-400 hover:text-white transition">
           Support
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
          Terms and Conditions          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
