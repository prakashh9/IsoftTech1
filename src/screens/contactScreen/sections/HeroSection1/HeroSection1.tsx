import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full pt-6 sm:pt-8 lg:pt-[30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <div className="absolute top-[-15px] left-[-10px] sm:left-[-15px] lg:left-[-25px] w-[100px] h-[100px] sm:w-[60px] sm:h-[60px] lg:w-[95px] lg:h-[95px] backdrop-blur-[30px] rounded-full border border-[#3c4649] z-30 flex items-center justify-center ">
          <img
            src="/integrated-software-white-without-bg-4.png"
            alt="Integrated software"
            className="w-[65px] h-[65px] sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] object-cover"
          />
        </div>

        {/* Navbar Container */}
        <>
          {/* Mobile: Show only the toggle button */}
          <div className="flex sm:hidden justify-end items-center h-[55px] px-4">
            <button
              className="text-white ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Tablet & Desktop: Full navbar container */}
          <div className="hidden sm:flex flex-1 min-w-[240px] h-[60px] bg-[#ffffff0d] border border-[#ffffff1a] rounded-[40px] backdrop-blur-[30px] items-center justify-end px-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium font-poppins transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-white font-semibold"
                        : "text-[#ffffff80] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <ChevronRight size={18} className="text-[#ffffff60]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-[#ffffff0d] border border-[#ffffff1a] backdrop-blur-[30px] rounded-[20px] p-4 z-20 mt-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 font-medium text-base font-poppins transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-white font-semibold"
                    : "text-[#ffffff80] hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
