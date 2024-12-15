import React from 'react';

const Contact = () => {
  return (
    <section className="md:py-10 bg-[#19191B] rounded-lg">
      <div className="container mx-auto px-4">
        {/* Card Container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between  rounded-lg  p-8  md:p-12">
          {/* Text Section */}
          <div className="flex-1  md:text-left">
            <h1 className="text-3xl max-w-[500px] md:text-5xl tracking-wide font-extrabold text-white leading-tight">
              Build Your Awesome Platform
            </h1>
           
          </div>

          {/* Button Section */}
          <div className="mt-8 md:mt-0">
            <button className="bg-[#5454D4] hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
