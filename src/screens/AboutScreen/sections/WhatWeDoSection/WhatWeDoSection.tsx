//import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhatWeDoSection = (): JSX.Element => {
  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description:
        "Custom-built software solutions designed to solve real business challenges with precision and scalability.",
      icon: "/softwaredevelopment-1.png",
      featured: true,
      row: 1,
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Engaging, responsive websites crafted for performance, usability, and brand impact.",
      icon: "/webbb-1.png",
      featured: false,
      row: 1,
    },
    {
      id: 3,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.",
      icon: "/mobile-development--1--1.png",
      featured: false,
      row: 1,
    },
    {
      id: 4,
      title: "Enterprise & SaaS Solutions",
      description:
        "Robust, cloud-powered platforms tailored for scalability, automation, and business growth.",
      icon: "/saass-1.png",
      featured: false,
      row: 2,
    },
    {
      id: 5,
      title: "Artificial Intelligence Solutions",
      description:
        "Intelligent systems powered by AI and Machine learning to drive smarter decisions and automation.",
      icon: "/artificial-intelligence-1.png",
      featured: false,
      row: 2,
    },
    {
      id: 6,
      title: "UI/UX Design",
      description:
        "User-first design that blends aesthetics and functionality to elevate your digital products.",
      icon: "/uiux-1.png",
      featured: false,
      row: 2,
    },
  ];

  const firstRowServices = services.filter((service) => service.row === 1);
  const secondRowServices = services.filter((service) => service.row === 2);

  return (
    <section className="w-full max-w-[970px] mx-auto py-16 px-4 animate-fade-in-up animate-delay-200">
      <div className="flex flex-col items-center mb-12">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-[#ffffff] text-[39px] text-center tracking-[0] leading-[42px] animate-fade-in-up animate-delay-300 hover:text-gradient-animate transition-all duration-500 scroll-fade-up">
          What We Do
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 scroll-fade-up scroll-stagger-1">
        {firstRowServices.map((service) => (
          <Card
            key={service.id}
            className={`h-[226px] rounded-[3px] backdrop-blur-[6px] backdrop-brightness-[100%] border-[0.75px] w-full transition-colors duration-300 hover:bg-red-600 animate-bounce-in animate-delay-${400 + service.id * 100} scroll-rotate-in scroll-stagger-${service.id} ${
              service.featured
                ? "bg-[#0b0b0b] border-[#ffffff]"
                : "border-[#ffffff] bg-transparent"
            }`}
          >
            <CardContent className="p-0 h-full relative">
              <div className="w-[53px] h-[53px] absolute top-[30px] left-[18px] bg-[#ffffff0d] rounded-[7.5px] border-[0.75px] border-solid border-[#ffffff1a] backdrop-blur-[22.5px] backdrop-brightness-[100%] hover-glow animate-rotate-in animate-delay-500">
                <img
                  className="absolute w-auto h-auto max-w-[34px] max-h-[34px] inset-0 m-auto object-cover hover-scale animate-pulse-slow"
                  alt={service.title}
                  src={service.icon}
                />
              </div>

              <div className="absolute w-[calc(100%-36px)] max-w-[272px] top-[101px] left-[18px] right-[18px]">
                <h3
                  className={`w-full font-['Poppins',Helvetica] text-white text-lg leading-[21.8px] kinetic-text transition-all duration-300 ${
                    service.featured ? "font-medium" : "font-normal"
                  }`}
                >
                  {service.title.includes(" ") &&
                  !service.title.includes("Custom") ? (
                    <>
                      {service.title.split(" ")[0]}
                      <br />
                      {service.title.split(" ").slice(1).join(" ")}
                    </>
                  ) : (
                    service.title
                  )}
                </h3>

                <p className="w-full max-w-[262px] mt-[16px] font-['Poppins',Helvetica] font-light text-white text-xs leading-[16.5px] loading-text hover:text-[#ffffff99] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 scroll-fade-up scroll-stagger-2">
        {secondRowServices.map((service) => (
          <Card
            key={service.id}
            className={`h-[226px] rounded-[3px] border-[0.75px] border-solid border-[#ffffff] backdrop-blur-[6px] backdrop-brightness-[100%] bg-transparent w-full transition-colors duration-300 hover:bg-red-600 animate-flip-in animate-delay-${700 + service.id * 100} scroll-rotate-in scroll-stagger-${service.id}`}
          >
            <CardContent className="p-0 h-full relative">
              <div className="w-[53px] h-[53px] absolute top-[30px] left-[18px] bg-[#ffffff0d] rounded-[7.5px] border-[0.75px] border-solid border-[#ffffff1a] backdrop-blur-[22.5px] backdrop-brightness-[100%] hover-glow animate-rotate-in animate-delay-800">
                <img
                  className="absolute w-auto h-auto max-w-[34px] max-h-[34px] inset-0 m-auto object-cover hover-scale animate-pulse-slow"
                  alt={service.title}
                  src={service.icon}
                />
              </div>

              <div className="absolute w-[calc(100%-36px)] max-w-[272px] top-[101px] left-[18px] right-[18px]">
                <h3 className="font-['Poppins',Helvetica] font-normal text-white text-lg leading-[21.8px] kinetic-text transition-all duration-300">
                  {service.title.includes(" ") ? (
                    <>
                      {service.title.split(" ")[0]}{" "}
                      {service.title.split(" ")[1]}
                      <br />
                      {service.title.split(" ").slice(2).join(" ")}
                    </>
                  ) : (
                    service.title
                  )}
                </h3>

                <p className="w-full max-w-[262px] mt-[16px] font-['Poppins',Helvetica] font-light text-white text-xs leading-[16.5px] loading-text hover:text-[#ffffff99] transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
