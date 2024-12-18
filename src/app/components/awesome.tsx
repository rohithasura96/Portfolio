"use client"; // Add this directive at the very top of the file

import Image from 'next/image';

const SlickSlider = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row w-full gap-5 md:gap-10 md:h-[300px]">
      {/* Slide 1 */}
      <div className="w-full md:w-[300px] h-[200px] relative">
        <Image
          src="/awesome1.png"
          alt="Slide"
          fill
         
          className="rounded-lg"
        />
      </div>

      {/* Slide 2 */}
      <div className="flex justify-center items-center">
      <div className="flex justify-center items-center w-full md:w-[300px] h-[200px] relative">
        <Image
          src="/awesome2.png"
          alt="Slide"
          fill
          
          className="rounded-lg"
        />
      </div>
      </div>

      {/* Slide 3 */}
       <div className="flex justify-end items-end">
      <div className="flex justify-end items-end w-full md:w-[300px] h-[200px] relative">
        <Image
          src="/awesome3.png"
          alt="Slide"
          fill
        
          className="rounded-lg"
        />
      </div>
      </div>
    </div>
  );
};

export default SlickSlider;
