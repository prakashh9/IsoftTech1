//import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { motion } from "framer-motion";

export const HeroSection1 = (): JSX.Element => {
  return (
    <section className="w-full py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="bg-[#ffffff3d] text-white border-white font-normal text-base px-4 py-2 rounded-[10px] hover-scale cursor-pointer"
            >
              Services and Solutions
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-poppins text-3xl md:text-4xl lg:text-[48px] text-white leading-tight"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <span className="font-semibold inline-block">Bespoke services for </span>
            <br />
            <span className="font-semibold italic inline-block text-glow">modern businesses</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="font-poppins text-base md:text-lg text-white leading-relaxed max-w-lg md:mx-0 mx-auto"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            At Integrated SoftTech, we offer a wide range of innovative services
            designed to address the unique needs of businesses in various
            industries. Our expertise spans across custom software development, AI
            solutions, web and mobile app development, cloud services, and digital
            transformation. We deliver cutting-edge solutions that drive efficiency,
            foster growth, and enable your business to thrive in the digital age.
          </motion.p>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex justify-center lg:justify-end">
          <img
            src="/gdsgsggs.png"
            alt="Team Working"
            className="w-[300px] md:w-[400px] lg:w-[680px] h-auto rounded-xl object-cover shadow-xl hover-scale transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};
