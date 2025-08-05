//import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NewsletterSection = (): JSX.Element => {
  // Social media data for mapping
  const socialIcons = [
    { icon: "/icon-3.png", alt: "Icon" },
    { icon: "/icon-4.png", alt: "Icon" },
    { icon: "/mdi-facebook.svg", alt: "Mdi facebook" },
    { icon: "/mdi-github.svg", alt: "Mdi github" },
  ];

  // Footer links data
  const companyLinks = [
    "About Us",
    "Careers",
    "Press & Media",
    "Leadership Team",
    "Sustainability",
  ];
  const resourceLinks = [
    "Blog",
    "Case Studies",
    "Whitepapers",
    "FAQs",
    "Webinars",
    "Support Center",
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#ffffff0d] border border-solid border-[#ffffff1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] mx-4 rounded-xl hover-lift">
      <div className="container mx-auto flex flex-wrap justify-between px-4 md:px-8">
        {/* Newsletter Subscription */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="font-normal text-lg md:text-xl text-white mb-6 hover:text-[#ed1c24] transition-colors duration-300 cursor-pointer animate-fade-in-left hover-rubber-band">
            Join a Newsletter
          </h3>

          <div className="mb-6">
            <label className="block font-light text-[#ffffffb2] text-sm md:text-base mb-2 animate-fade-in-up animate-delay-200 hover:animate-bounce-text">
              Your Email
            </label>
            <Input
              className="h-[50px] md:h-[60px] bg-transparent border border-[#ffffff33] rounded-[10px] text-[#ffffffb2] font-light hover:border-[#ed1c24] focus:border-[#ed1c24] transition-colors duration-300 animate-fade-in-up animate-delay-400"
              placeholder="your email here"
            />
          </div>

          <Button className="bg-[#272727] hover:bg-[#333333] text-white font-medium rounded-[10.67px] px-8 md:px-12 py-4 md:py-[23px] h-auto w-full md:w-auto button-hover animate-zoom-in animate-delay-600 hover-bounce-text">
            Subscribe
          </Button>

          <div className="flex mt-6 md:mt-8 space-x-3 md:space-x-5 justify-center md:justify-start">
            <div className="flex space-x-3 md:space-x-5">
              <Button
                variant="ghost"
                size="icon"
                className="w-[45px] h-[45px] md:w-[53px] md:h-[53px] rounded-full bg-[#272727] p-0 hover-scale"
              >
                <img className="w-[20px] h-4 md:w-[25px] md:h-5 icon-bounce" alt="Icon" src="/icon-3.png" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-[45px] h-[45px] md:w-[53px] md:h-[53px] rounded-full bg-[#272727] p-0 hover-scale"
              >
                <img className="w-4 h-4 md:w-5 md:h-5 icon-bounce" alt="Icon" src="/icon-4.png" />
              </Button>
            </div>

            <div className="flex space-x-3 md:space-x-5">
              <Button
                variant="ghost"
                size="icon"
                className="w-[45px] h-[45px] md:w-[53px] md:h-[53px] rounded-full bg-[#272727] p-0 hover-scale"
              >
                <img
                  className="w-5 h-5 md:w-7 md:h-7 icon-bounce"
                  alt="Mdi facebook"
                  src="/mdi-facebook.svg"
                />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-[45px] h-[45px] md:w-[53px] md:h-[53px] rounded-full bg-[#272727] p-0 hover-scale"
              >
                <img
                  className="w-5 h-5 md:w-7 md:h-7 icon-bounce"
                  alt="Mdi github"
                  src="/mdi-github.svg"
                />
              </Button>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
          <h3 className="font-normal text-lg md:text-xl text-white mb-6 hover:text-[#ed1c24] transition-colors duration-300 cursor-pointer animate-fade-in-up animate-delay-200 hover-rubber-band">Company</h3>
          <ul className="font-light text-[#ffffffb2] text-sm md:text-base leading-8 md:leading-[43px]">
            {companyLinks.map((link, index) => (
              <li key={`company-${index}`} className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer animate-fade-in-left hover-bounce-text" style={{animationDelay: `${(index + 1) * 0.1}s`}}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
          <h3 className="font-normal text-lg md:text-xl text-white mb-6 hover:text-[#ed1c24] transition-colors duration-300 cursor-pointer animate-fade-in-up animate-delay-400 hover-swing">Resources</h3>
          <ul className="font-light text-[#ffffffb2] text-sm md:text-base leading-8 md:leading-[43px]">
            {resourceLinks.map((link, index) => (
              <li key={`resource-${index}`} className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer animate-fade-in-right hover-bounce-text" style={{animationDelay: `${(index + 1) * 0.1}s`}}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div className="w-full lg:w-1/4">
          <h3 className="font-medium text-xl md:text-2xl text-white mb-6 hover:text-[#ed1c24] transition-colors duration-300 cursor-pointer animate-fade-in-up animate-delay-600 hover-rubber-band animate-text-glow">
            Integrated SoftTech
          </h3>
          <p className="font-light text-[#ffffffb2] text-sm md:text-base leading-relaxed md:leading-[30px] animate-fade-in-up animate-delay-800 hover:animate-bounce-text">
            we don't just build software—we engineer experiences. Born in the
            heart of Dubai's innovation ecosystem, our mission is to bridge
            business goals with cutting-edge digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
