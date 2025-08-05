import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const [titleWords, setTitleWords] = useState<string[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const words = [
      "Transform",
      "Your",
      "Business",
      "with",
      "Innovative",
      "Software",
      "Solutions",
    ];
    setTitleWords(words);

    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => new Set(prev).add(index));
      }, index * 200);
    });
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/image.png)] bg-cover bg-center z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,11,11,0.9)] via-[rgba(11,11,11,0.6)] to-[rgba(11,11,11,0.2)]" />
        <div className="absolute bottom-0 w-full h-[150px] sm:h-[200px] lg:h-[228px] bg-gradient-to-t from-[rgba(11,11,11,0.8)] to-transparent" />
      </div>

      <div className="relative z-10 w-[90%] max-w-7xl mx-auto h-full">
        {/* NAVIGATION */}
        <div className="relative pt-6 sm:pt-8 lg:pt-[30px]">
          {/* Logo */}
          <div className="absolute top-[10px] left-[-20px] sm:left-[-20px] lg:left-[-40px] w-[100px] h-[100px] sm:w-[60px] sm:h-[60px] lg:w-[95px] lg:h-[95px]  backdrop-blur-[30px]  rounded-full border border-[#3c4649] z-30 flex items-center justify-center">
            <img
              src="/integrated-software-white-without-bg-4.png"
              alt="Integrated software"
              className="w-[65px] h-[65px] sm:w-[65px] sm:h-[65px] lg:w-[65px] lg:h-[65px] object-cover"
            />
          </div>

          {/* Navbar */}
          <div className="flex-1 min-w-[240px] h-[55px] sm:h-[60px] bg-[#ffffff0d] border border-[#ffffff1a] rounded-[40px] backdrop-blur-[30px] flex items-center justify-end px-4 sm:px-6 ">
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

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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

        {/* HERO CONTENT */}
        <div className="flex items-center justify-between h-[calc(100%-120px)] mt-8 sm:mt-12 lg:mt-16">
          <div className="flex-1 max-w-[650px] lg:max-w-[750px]">
            {/* Animated Heading */}
            <h1 className="text-white font-medium text-2xl sm:text-4xl lg:text-[48px] xl:text-[56px] leading-tight mb-6 lg:mb-8 font-['Poppins']">
              <div className="mb-2">
                {titleWords.slice(0, 3).map((word, i) => (
                  <span
                    key={i}
                    className={`inline-block mr-3 ${
                      visibleWords.has(i) ? "animate-kinetic-text" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      transform: visibleWords.has(i)
                        ? "translateX(0) rotate(0deg)"
                        : `translateX(${
                            i % 2 === 0 ? "-100px" : "100px"
                          }) rotate(${i % 2 === 0 ? "-5deg" : "5deg"})`,
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <div className="mb-2">
                {titleWords.slice(3, 6).map((word, i) => (
                  <span
                    key={i + 3}
                    className={`inline-block mr-3 ${
                      visibleWords.has(i + 3)
                        ? "animate-kinetic-text"
                        : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${(i + 3) * 0.2}s`,
                      transform: visibleWords.has(i + 3)
                        ? "translateX(0) rotate(0deg)"
                        : `translateX(${
                            (i + 3) % 2 === 0 ? "-100px" : "100px"
                          }) rotate(${(i + 3) % 2 === 0 ? "-5deg" : "5deg"})`,
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
              <div>
                {titleWords.slice(6).map((word, i) => (
                  <span
                    key={i + 6}
                    className={`inline-block mr-3 ${
                      visibleWords.has(i + 6)
                        ? "animate-kinetic-text"
                        : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${(i + 6) * 0.2}s`,
                      transform: visibleWords.has(i + 6)
                        ? "translateX(0) rotate(0deg)"
                        : `translateX(${
                            (i + 6) % 2 === 0 ? "-100px" : "100px"
                          }) rotate(${(i + 6) % 2 === 0 ? "-5deg" : "5deg"})`,
                      transition:
                        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </h1>

            {/* Subtext */}
            <div className="relative mb-8 lg:mb-12 animate-slide-in-right">
              <img
                className="absolute w-px h-16 sm:h-20 lg:h-24 top-0 left-0 animate-pulse-glow"
                alt="Vector"
                src="/Vector2.svg"
              />
              <p className="pl-6 sm:pl-8 lg:pl-11 text-[#ffffffb2] text-sm sm:text-base lg:text-lg leading-6 lg:leading-[28px] font-light font-['Poppins']">
                We are a leading software development company specializing in
                cutting-edge technology solutions. From web applications to
                AI-powered systems, we deliver excellence that drives your
                business forward.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[30px] ml-0 sm:ml-6 lg:ml-[44px]">
              <Link to="/contact">
  <Button className="w-full sm:w-[60px] lg:w-[140px] h-[45px] sm:h-[48px] lg:h-[50px] bg-[#5b4e48] rounded-[10px] text-white hover:bg-[#4a3f3a]">
    Get in Touch
  </Button>
</Link>       <Link to="/about">
              <Button className="w-full sm:w-[60px] lg:w-[140px] h-[45px] sm:h-[48px] lg:h-[50px] bg-[#ed1c24] rounded-[10px] text-white hover:bg-[#d01920]">
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
