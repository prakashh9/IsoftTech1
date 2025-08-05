//import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { motion } from "framer-motion";

export const CallToActionSection = (): JSX.Element => {
  const serviceCards = [
    {
      title: "Software Development",
      description:
        "Custom-built software solutions designed to solve real business challenges with precision and scalability.",
      icon: "/softwaredevelopment-1.png",
      iconAlt: "Software development",
    },
    {
      title: "Web Development",
      description:
        "Engaging, responsive websites crafted for performance, usability, and brand impact.",
      icon: "/webbb-1.png",
      iconAlt: "Web development",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.",
      icon: "/mobile-development--1--1.png",
      iconAlt: "Mobile development",
    },
    {
      title: "Enterprise & SaaS Solutions",
      description:
        "Robust, cloud-powered platforms tailored for scalability, automation, and business growth.",
      icon: "/saass-1.png",
      iconAlt: "SaaS",
    },
    {
      title: "AI Solutions",
      description:
        "Intelligent systems powered by AI and Machine learning to drive smarter decisions and automation.",
      icon: "/artificial-intelligence-1.png",
      iconAlt: "Artificial intelligence",
    },
    {
      title: "UI/UX Design",
      description:
        "User-first design that blends aesthetics and functionality to elevate your digital products.",
      icon: "/uiux-1.png",
      iconAlt: "UI/UX",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-8 mb-4 md:mb-8 md:mt-16"
        >
          <Badge className="bg-[#ffffff3d] text-white border border-white rounded-[10px] px-2.5 py-[5px] cursor-pointer">
            <span className="font-['Poppins',Helvetica] font-normal text-base">
              Our Services
            </span>
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="bg-[#ffffff0d] border-[#ffffff1a] backdrop-blur-[30px] rounded-[30px] h-auto min-h-[400px] md:h-[435px] relative cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="flex flex-col items-center justify-between h-full p-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.25 + 0.1 }}
                    className="mt-12 mb-6"
                  >
                    <div className="w-[70px] h-[70px] bg-[#ffffff0d] rounded-[10px] border border-solid border-[#ffffff1a] backdrop-blur-[30px] flex items-center justify-center">
                      <img
                        className="w-[38px] h-[38px]"
                        alt={service.iconAlt}
                        src={service.icon}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                    className="flex-1 flex flex-col items-center"
                  >
                    <h3 className="font-['Poppins',Helvetica] font-normal text-white text-xl md:text-2xl text-center tracking-[0] leading-tight md:leading-[34px] mt-6 mb-6 md:mb-8 hover:text-[#ed1c24] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="font-['Poppins',Helvetica] font-light text-[#ffffffb2] text-base md:text-lg text-center tracking-[0] leading-relaxed md:leading-[30px] max-w-[374px] px-2">
                      {service.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.4 + 0.3 }}
                    className="mt-auto mb-6"
                  >
                    <button className="font-['Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-normal px-4 py-2 rounded-md  hover:text-[#ed1c24] transition-all duration-300">
                      Learn More
                    </button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
