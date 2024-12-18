import Image from "next/image";
import Header from "./components/header";
import Hero from './components/hero';
import Particles from "@/components/ui/particles";
import Video from './components/video';

import ServiceMain from './components/serviceMain';
import Awesome from "./components/awesome";
import { title } from "process";
import contact from './components/contact';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className=" max-w-[1280px] mx-auto px-10">

     <Header></Header>
     
     <div className=" relative md:min-h-10 min-h-[800px]">
     <Particles></Particles>
     
        <Hero></Hero>
       
        <div className=" flex md:hidden">
        <Particles></Particles>
        </div>
        <div className=" flex md:hidden">
        <Particles></Particles>
        </div>
      </div>
      <Video></Video>
      <div className="bg-[url('/hero-color.png')] bg-cover bg-center">
      <ServiceMain></ServiceMain>
      </div>
      <div className="">
      <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-2xl sm:text-5xl font-bold text-neutral-50 mb-3 sm:mb-4">Our Awesome Portofolio</h2>
            
            </div>
      <Awesome></Awesome>
      </div>
      <div className="my-10">
        <Contact></Contact>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
