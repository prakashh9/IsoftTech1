import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-12 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-[80%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-12 max-w-full lg:max-w-2xl animate-slide-in-left">
          <h2 className="text-1xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight font-['Poppins',Helvetica] animate-slide-in-up">
            <span className="text-white hover:text-[#ffffffcc] transition-colors duration-300">Experience the future of </span>
            <span className="text-gradient animate-gradient hover-scale transition-all duration-300 cursor-default">software development</span>
            <span className="text-white hover:text-[#ffffffcc] transition-colors duration-300"> with </span>
            <span className="text-[#a6a9a8] hover:text-[#ed1c24] transition-colors duration-300">Integrated SoftTech</span>
          </h2>

          <Button className="bg-[#ec0000] hover:bg-[#ec0000]/90 text-[#080a0b] rounded-[10px] px-4 sm:px-6 py-2 sm:py-2.5 font-bold font-['Poppins',Helvetica] text-sm sm:text-base hover-lift hover-glow transition-all duration-300 group animate-scale-in">
            <span>Contact Us</span>
            <ArrowUpRightIcon className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[486px] h-[300px] sm:h-[350px] lg:h-[419px] mt-6 lg:mt-0 animate-slide-in-right">
          <div className="relative h-full">
            <img className="absolute w-[180px] sm:w-[200px] lg:w-[232px] h-[180px] sm:h-[200px] lg:h-[232px] top-0 left-0 animate-float hover-scale transition-all duration-500" alt="Rect" src="/_Rect_.png" />
            <img className="absolute w-[120px] sm:w-[140px] lg:w-[162px] h-[120px] sm:h-[140px] lg:h-[162px] bottom-0 right-0 animate-float hover-scale transition-all duration-500" alt="Rect" src="/_Rect_ (1).png" style={{animationDelay: '0.5s'}} />
            <img className="absolute w-[250px] sm:w-[300px] lg:w-96 h-[200px] sm:h-[230px] lg:h-[274px] top-12 sm:top-16 lg:top-20 left-8 sm:left-12 lg:left-[61px] animate-fade-in hover-glow transition-all duration-500" alt="Glass" src="/glass.png" />
          </div>
          <img className="absolute w-[140px] sm:w-[160px] lg:w-[197px] h-[140px] sm:h-[160px] lg:h-[197px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover hover-scale transition-all duration-500" alt="Integrated software" src="/integrated-software-white-without-bg-4.png" />
        </div>
      </div>
    </section>
  );
};