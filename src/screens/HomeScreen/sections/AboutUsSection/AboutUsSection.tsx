import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mt-26 sm:mt-20 lg:mt-24">
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl lg:max-w-3xl animate-slide-in-left mt-15">
            <Badge
              variant="outline"
              className="bg-[#ffffff3d] text-white border-white border-[0.5px] rounded-[10px] px-2.5 py-[5px] font-normal text-sm sm:text-base mb-8 hover-glow transition-all duration-300 animate-scale-in"
            >
              Who We Are?
            </Badge>

            <h2 className="font-normal text-white text-2xl sm:text-3xl lg:text-[48px] leading-snug sm:leading-tight lg:leading-[58px] [font-family:'Poppins',Helvetica] mb-8 animate-slide-in-up">
              <span className="text-white">Transforming Ideas</span> into{" "}
              <span className="hover:text-[#ed1c24] transition-colors duration-300 cursor-default">
                Intelligent Digital Experiences
              </span>
              .
            </h2>

            <div className="font-normal text-white text-sm sm:text-base lg:text-xl leading-relaxed [font-family:'Poppins',Helvetica] space-y-6 mb-12 stagger-children">
              <p className="hover:text-[#ffffffcc] transition-colors duration-300">
                At Integrated SoftTech, we don&apos;t just build software—we
                engineer experiences. Born in the heart of Dubai&apos;s
                innovation ecosystem, our mission is to bridge business goals
                with cutting-edge digital solutions. From intuitive mobile apps
                to enterprise-grade SaaS platforms and intelligent AI systems,
                we design with purpose and develop with precision.
              </p>
              <p className="hover:text-[#ffffffcc] transition-colors duration-300">
                What sets us apart isn&apos;t just our technical
                expertise—it&apos;s our mindset. We partner with
                forward-thinking brands to transform complex challenges into
                elegant, scalable solutions. Whether you&#39;re a startup
                shaping your MVP or an enterprise ready to modernize, we bring
                clarity to complexity and agility to execution.
              </p>
              <p className="hover:text-[#ffffffcc] transition-colors duration-300">
                <span className="text-gradient">Driven by curiosity.</span>{" "}
                <span className="text-gradient">Backed by code.</span>{" "}
                <span className="text-gradient">Powered by passion.</span>
              </p>
            </div>
           <Link to="/about">
            <Button
              variant="outline"
              className="rounded-[20px] border-white text-black font-bold px-6 py-4 h-auto text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 hover-lift hover-glow group"
            >
              Learn More
              <ArrowRightIcon className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </Link>
          </div>

          {/* Right Content - Logo */}
          <div className="flex-shrink-0 relative animate-slide-in-right">
            <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Outer dashed circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/30 animate-rotate-slow"></div>

              {/* Inner solid circle */}
              <div className="absolute inset-8 rounded-full border border-white/40 hover-glow transition-all duration-300"></div>

              {/* Logo container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Main logo */}
                  <div className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]  rounded-full flex items-center justify-center relative hover-scale hover-glow transition-all duration-500 animate-pulse-glow">
                    <img
                      className="w-[180px] h-[180px] lg:w-[150px] lg:h-[150px] object-contain animate-float"
                      alt="Integrated software"
                      src="/integrated-software-white-without-bg-4.png"
                    />
                  </div>

                  {/* Company name */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
                    <p className="text-white font-medium text-base sm:text-lg lg:text-xl italic [font-family:'Poppins',Helvetica] hover:text-[#ed1c24] transition-colors duration-300">
                      Integrated SoftTech
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-float hover-scale transition-all duration-300"></div>
              <div
                className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full animate-float hover-scale transition-all duration-300"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/2 right-2 w-2 h-2 bg-white/60 rounded-full animate-float hover-scale transition-all duration-300"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/4 left-2 w-2 h-2 bg-white/60 rounded-full animate-float hover-scale transition-all duration-300"
                style={{ animationDelay: "1.5s" }}
              ></div>

              {/* Additional decorative dots */}
              <div
                className="absolute top-16 left-16 w-1.5 h-1.5 bg-[#ed1c24] rounded-full animate-float hover-scale transition-all duration-300"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-16 right-16 w-1.5 h-1.5 bg-[#ed1c24] rounded-full animate-float hover-scale transition-all duration-300"
                style={{ animationDelay: "2.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
