"use client";

import React from 'react';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { BorderBeam } from '@/components/ui/border-beam';

const Video = () => {
  return (
    <div>
    <div className=" max-w-[1080px] mx-auto flex md:justify-between flex-col md:flex-row">
     <h2 className="text-4xl  md:text-5xl tracking-wide font md:leading-[59px] font-extrabold text-white ">
          Why Enver Is The Best Choice?
          </h2>

          <p className="mt-6 text-[14px] font-mono	 leading-[26px] py-2 text-gray-300">
          Watch this one minute video so you understand why you should use our services!
          </p>
          </div>
      <div className='max-w-[1080px] mx-auto p-2 rounded-lg transition-shadow relative'>
      <BorderBeam className=' '/>
      
        <HeroVideoDialog 
          videoSrc="https://www.youtube.com/embed/HlmhDl_KnOY?si=a8iUZlOx3ZiD9sDW"
          thumbnailSrc="/video.png"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        
        />
        <BorderBeam className=' '/>
      </div>
    </div>
  );
};

export default Video;
