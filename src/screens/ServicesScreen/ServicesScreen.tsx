// src/screens/ServicesScreen/ServicesScreen.tsx
//import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection1 } from "./sections/HeroSection";
//import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import {  NewsletterSection } from "../contactScreen/sections/NewsletterSection/NewsletterSection";
import { HeroSection  } from "../contactScreen/sections/HeroSection1/HeroSection1";


import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ServiceSection } from "./sections/ServiceCardsSection";

export const ServicesSection = (): JSX.Element => {
  return (
    <>
    <div className="bg-[#0b0b0b] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#0b0b0b] overflow-hidden w-full relative">
        <div className="relative w-full">
          <div className="relative">
            <div className="absolute w-[800px] h-[800px] top-[400px] right-[-400px] rounded-[400px] blur-[200px] bg-[linear-gradient(0deg,rgba(115,10,10,1)_0%,rgba(115,10,10,1)_100%)] opacity-50" />
             <div className="relative z-10 ">
            <HeroSection />
            <HeroSection1 />
            <FeaturesSection />
            </div>
          </div>

          <div className="relative w-full mt-16">
            <div className="absolute w-[400px] h-[250px] top-[200px] left-[-100px] rounded-[200px/125px] -rotate-90 blur-[80px] bg-[linear-gradient(349deg,rgba(0,0,0,1)_0%,rgba(101,0,0,1)_64%,rgba(163,31,73,1)_100%)] opacity-70" />
            <ServiceSection />
            <CallToActionSection />
          </div>

          <TestimonialsSection />
        </div>
      </div>
    </div>
    <NewsletterSection />

    </>
  );
};
