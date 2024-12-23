"use client";

import Image from 'next/image';

const SlickSlider = () => {
  return (
    <section id="projects" className="w-full">
      <div className="flex justify-center flex-col md:flex-row w-full gap-5 md:gap-10 md:h-[300px]">
        {/* Slide 1 */}
        <div className="w-full md:w-[300px] h-[200px] relative">
          <Image
            src="/awesome1.png"
            alt="Project 1 preview"
            fill
            className="rounded-lg"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-full md:w-[300px] h-[200px] relative">
          <Image
            src="/awesome2.png"
            alt="Project 2 preview"
            fill
            className="rounded-lg"
          />
        </div>

        {/* Slide 3 */}
        <div className="w-full md:w-[300px] h-[200px] relative">
          <Image
            src="/awesome3.png"
            alt="Project 3 preview"
            fill
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SlickSlider;
