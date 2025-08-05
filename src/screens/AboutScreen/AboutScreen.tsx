import React, { useEffect } from "react";
import { initScrollAnimations } from "../../lib/scrollAnimations";
import { AboutUsSection } from "./sections/AboutUsSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TransformingBusinessesSection } from "./sections/TransformingBusinessesSection";
import { WhatWeDoSection } from "./sections/WhatWeDoSection";
import { NewsletterSection as FooterNewsletterSection } from "../contactScreen/sections/NewsletterSection/NewsletterSection";
import { HeroSection } from "../contactScreen/sections/HeroSection1/HeroSection1";

export const AboutUs = (): JSX.Element => {
  useEffect(() => {
    const scrollAnimations = initScrollAnimations();
    return () => scrollAnimations.disconnect();
  }, []);

  return (
    <div className="bg-[#0b0b0b]  w-full">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#0b0b0b] w-full max-w-[1440px] relative px-4 sm:px-6 lg:px-8">
          
          <div className="relative w-full">
            {/* Hero and About section */}
            <HeroSection />
            <AboutUsSection />

            {/* Red Gradient (left) */}
            <div className="absolute w-[158px] h-[598px] top-[29px] rounded-[498.75px] blur-[225px] bg-[linear-gradient(0deg,rgba(115,10,10,1)_0%,rgba(115,10,10,1)_100%)] hidden lg:block" />

            {/* Services */}
            <div className="mt-24 scroll-scale-in">
              <ServicesSection />
            </div>

            {/* Transforming Businesses */}
            <div className="mt-24 scroll-fade-left">
              <TransformingBusinessesSection />
            </div>

            {/* What We Do */}
            <div className="mt-24 scroll-fade-up">
              <WhatWeDoSection />
            </div>

            {/* Newsletter section */}
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0 mt-24 scroll-fade-right">
              <img
  className="w-full max-w-[680px] h-auto lg:h-[346px] object-cover mb-10 " 
  alt="Office environment"
  src="/asdsadsadassd-1.png"
/>

              <div className="w-full lg:absolute lg:right-0 lg:top-0 lg:w-auto">
                <NewsletterSection />
              </div>
            </div>

            {/* Red Gradient (bottom-left) */}
            <div className="absolute w-[433px] h-[260px] top-[1790px] left-[-248px] rounded-[216.37px/130.12px] -rotate-90 blur-[80.48px] bg-[linear-gradient(349deg,rgba(0,0,0,1)_0%,rgba(101,0,0,1)_64%,rgba(163,31,73,1)_100%)] hidden lg:block" />
          </div>
        </div>
        {/* Footer (also black background) */}
        <div className="w-full bg-[#0b0b0b]">
          <FooterNewsletterSection />
        </div>
      </div>
    </div>
  );
};