import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const services = [
    { title: "Software Development", description: "Custom-built software solutions designed to solve real business challenges with precision and scalability.", icon: "/softwaredevelopment-1.png", iconAlt: "Software development" },
    { title: "Web Development", description: "Engaging, responsive websites crafted for performance, usability, and brand impact.", icon: "/webbb-1.png", iconAlt: "Web development" },
    { title: "Mobile Apps", description: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.", icon: "/mobile-development--1--1.png", iconAlt: "Mobile development" },
    { title: "Enterprise & SaaS Solutions", description: "Robust, cloud-powered platforms tailored for scalability, automation, and business growth.", icon: "/saass-1.png", iconAlt: "SaaS" },
    { title: "AI Solutions", description: "Intelligent systems powered by AI and Machine learning to drive smarter decisions and automation.", icon: "/artificial-intelligence-1.png", iconAlt: "Artificial intelligence" },
    { title: "UI/UX Design", description: "User-first design that blends aesthetics and functionality to elevate your digital products.", icon: "/uiux-1.png", iconAlt: "UI/UX" },
  ];

  return (
    <section className="w-full pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 -mt-36 sm:-mt-32 lg:-mt-36">
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="text-left mb-8 sm:mb-12 lg:mb-16 animate-slide-in-up">
          <h2 className="font-['Poppins',Helvetica] text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[65px] max-w-4xl">
            <span className="font-medium text-white hover:text-[#ffffffcc] transition-colors duration-300">Driving digital </span>
            <span className="font-medium text-white animate-gradient hover-scale transition-all duration-300 cursor-default">Transformations </span>
            <span className="font-medium text-white hover:text-[#ffffffcc] transition-colors duration-300">Through  </span>
            <span className="font-medium italic text-gradient animate-gradient hover-scale transition-all duration-300 cursor-default">Smart Sevices</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-children">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#ffffff0d] rounded-[20px] border border-solid border-[#ffffff1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] w-full h-[320px] lg:h-[350px] relative overflow-hidden group hover:bg-[#ffffff12] transition-all duration-500 hover-lift hover-glow cursor-pointer">
              <CardContent className="p-6 lg:p-8 flex flex-col items-center h-full text-center">
                <div className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] bg-[#ffffff0d] rounded-[10px] border border-solid border-[#ffffff1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-[#ffffff15] group-hover:scale-110 transition-all duration-500 animate-float">
                  <img className="w-[32px] h-[32px] lg:w-[38px] lg:h-[38px] object-cover group-hover:scale-110 transition-transform duration-300" alt={service.iconAlt} src={service.icon} />
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-normal text-white text-lg lg:text-xl tracking-[0] leading-tight mb-4 lg:mb-6 group-hover:text-[#ed1c24] transition-colors duration-300">{service.title}</h3>
                <p className="[font-family:'Poppins',Helvetica] font-light text-[#ffffffb2] text-sm lg:text-base tracking-[0] leading-6 mb-6 lg:mb-8 flex-1 group-hover:text-[#ffffffcc] transition-colors duration-300">{service.description}</p>
                <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm lg:text-base tracking-[0] leading-[normal] hover:text-[#ed1c24] transition-all duration-300 mt-auto group-hover:scale-110 group-hover:font-medium">Learn More →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};