//import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { FAQSection } from "./sections/FAQSection";
//import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
//import { NewsletterSection } from "./sections/NewsletterSection";
import {  NewsletterSection } from "../contactScreen/sections/NewsletterSection/NewsletterSection";
import { HeroSection } from "./sections/HeroSection1/HeroSection1";


export const Contact = (): JSX.Element => {
  return (
    <>
      <div className="bg-[#0b0b0b] min-h-screen w-full overflow-x-hidden">
        <div className="bg-[#0b0b0b] w-full relative">
          {/* ✅ Mobile hero with padding */}
          <div className="block lg:hidden px-4">
            <HeroSection />
          </div>

          {/* ✅ Desktop hero untouched */}
          <div className="hidden lg:block">
            <HeroSection />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <MainContentSection />

            <div className="mt-2 lg:mt-4">
              <ContactFormSection />
            </div>
            <div className="mt-4 lg:mt-6">
              <FAQSection />
            </div>

            {/* Decorative Gradients */}
            <div className="absolute w-60 h-40 sm:w-80 sm:h-56 lg:w-36 lg:h-64 top-[15rem] sm:top-[20rem] lg:top-80 -left-5 sm:-left-16 lg:-left-10 rounded-full -rotate-90 blur-[107.3px] bg-[linear-gradient(349deg,rgba(255,0,4,1)_0%,rgba(142,0,0,1)_64%,rgba(255,0,81,1)_100%)] opacity-50" />

            <div className="absolute w-60 h-40 sm:w-80 sm:h-56 lg:w-96 lg:h-64 bottom-[15rem] sm:bottom-[20rem] lg:bottom-80 -right-8 sm:-right-16 lg:-right-20 rounded-full -rotate-90 blur-[107.3px] bg-[linear-gradient(349deg,rgba(255,0,4,1)_0%,rgba(142,0,0,1)_64%,rgba(255,0,81,1)_100%)] opacity-50" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <NewsletterSection />
    </>
  );
};
