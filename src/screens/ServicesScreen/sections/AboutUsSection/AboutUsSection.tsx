import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const AboutUsSection = (): JSX.Element => {
  const location = useLocation();

  // Navigation menu items data
  const navItems = [
    { name: "Home", active: false, icon: "/icon.png", path: "/Home" },
    { name: "About", active: false, icon: "/icon-1.png", path: "/about" },
    { name: "Services", active: true, icon: "/icon-2.png", path: "/" },
    { name: "Contact", active: false, icon: "", path: "/contact" },
  ];

  return (
    <section className="relative w-full ">
      <div className="relative h-full">
        {/* Background gradient overlay */}
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute bottom-0 w-full h-[228px] bg-[linear-gradient(180deg,rgba(11,11,11,0)_0%,rgba(11,11,11,0.7)_100%)]" />
        </div>

        {/* Navigation bar */}
        {/* Navigation Header */}
        <div className="relative w-full py-6 sm:py-8 lg:py-[30px] px-4 sm:px-6 lg:px-8">
          <div className="w-[90%] max-w-7xl mx-auto">
            <div className="relative animate-slide-in-up">
              {/* Logo - positioned absolutely */}
              <div className="absolute top-[-15px] sm:top-[-20px] lg:top-[-25px] left-[-15px] sm:left-[-20px] lg:left-[-25px] w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] bg-[#263135] rounded-full border border-solid border-[#3c4649] z-30 flex items-center justify-center">
                <img
                  className="w-[54px] h-[54px] sm:w-[66px] sm:h-[66px] lg:w-[78px] lg:h-[78px] object-cover animate-float"
                  alt="Integrated software"
                  src="/integrated-software-white-without-bg-2.png"
                />
              </div>

              {/* Navigation bar */}
              <div className="w-full h-[60px] sm:h-[70px] lg:h-[80px] bg-[#ffffff0d] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] border border-solid border-[#ffffff1a] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] flex items-center justify-between pl-[110px] pr-4 sm:pr-6 lg:pr-8 hover-lift">
                <div className="flex-1"></div>
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-[26px]">
                  {navItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <Link
                        to={item.path}
                        className={`font-medium text-sm sm:text-base lg:text-lg leading-[18px] whitespace-nowrap transition-all duration-300 hover:scale-110 cursor-pointer hover-bounce-text hover-rubber-band ${location.pathname === item.path ? "text-white hover-glow animate-text-glow" : "text-[#ffffff80] hover:text-white hover:text-shadow-lg animate-fade-in-up"} font-['Poppins',Helvetica]`}
                      >
                        {item.name}
                      </Link>
                      {index < navItems.length - 1 && (
                        <img
                          className="w-3 h-3 sm:w-4 sm:h-4 icon-bounce"
                          alt="Icon"
                          src={`/icon${index === 0 ? "" : `-${index}`}.png`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};