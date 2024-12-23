import React from 'react';
import { LucideIcon, Code, Brush, Camera, Video } from 'lucide-react';
import Particles from '@/components/ui/particles';
import { div } from 'framer-motion/client';
import { BorderBeam } from '@/components/ui/border-beam';

// Define an interface for the service object
interface Service {
    Icon: LucideIcon;
    gradientColors: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<{
    title: string;
    summary: string;
    services: Service[];
}> = ({ title, summary, services }) => {
    return (
      <div id='services' className='  overflow-hidden '>
        
        <div className="container   py-3 mx-auto px-4">
         
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-5xl font-bold text-neutral-50 mb-3 sm:mb-4">{title}</h2>
            
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ">
                {services.map((service, index) => {
                    const IconComponent = service.Icon;
                    return (
                      
                        <div 
                            key={index} 
                            className="  p-4 sm:p-6 text-center  transition-shadow relative "
                        ><BorderBeam className=' '/>
                         <BorderBeam className=' '/>
                            
                            
                         
                            <div className={`inline-flex items-center justify-center rounded-full mb-3 sm:mb-4 p-2 ${service.gradientColors}`}>
                                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-neutral-50 mb-2 sm:mb-3">{service.title}</h3>
                            <p className="text-xs sm:text-sm max-w-60 mx-auto text-neutral-300
                            00">{service.description}</p>
                            <BorderBeam className=' '/>
                            <BorderBeam className=' '/>
                            
                        </div>
                       
                    );
                })}
            </div>
        </div>
        </div>
    );
};

const services: Service[] = [
    { 
        Icon: Code, 
        gradientColors: "bg-gradient-to-r from-red-500 to-pink-500", 
        title: "Development", 
        description: "Create a platform with the best and coolest quality from us." 
    },
    { 
        Icon: Brush, 
        gradientColors: "bg-gradient-to-r from-purple-500 to-indigo-500", 
        title: "UI/UX Designer", 
        description: "We provide UI/UX Design services, and of course with the best quality." 
    },
    { 
        Icon: Brush, 
        gradientColors: "bg-gradient-to-r from-green-400 to-blue-500",
        title: "Graphic Designer", 
        description: "We provide Graphic Design services, with the best designers." 
    },
    { 
        Icon: Video, 
        gradientColors: "bg-gradient-to-r from-yellow-400 to-orange-500",
        title: "Motion Graphic", 
        description: "Create a platform with the best and coolest quality from us." 
    },
    { 
        Icon: Camera, 
        gradientColors: "bg-gradient-to-r from-pink-500 to-rose-500",
        title: "Photography", 
        description: "We provide Photography services, and of course with the best quality." 
    },
    { 
        Icon: Video, 
        gradientColors: "bg-gradient-to-r from-cyan-500 to-blue-500", 
        title: "Videography", 
        description: "Create a platform with the best and coolest quality from us." 
    }
];

const ServiceMain: React.FC = () => {
    return (
        <div className="my-6 sm:my-10 py-10 sm:py-20 ">
            <ServiceCard
                title="The Service We Provide For You"
                summary="Explore our services below, crafted with the utmost dedication to quality."
                services={services}
            />
        </div>
    );
};

export default ServiceMain;