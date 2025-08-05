import React, { useState, useEffect } from "react";

export const ServiceHighlightsSection = (): JSX.Element => {
  const [titleWords, setTitleWords] = useState<string[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const words = ["Driving", "Digital", "Transformation", "Through", "Smart", "Services"];
    setTitleWords(words);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleWords.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords(prev => new Set([...prev, index]));
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('service-highlights');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="service-highlights" className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[80%] max-w-7xl mx-auto text-left">
        <h1 className="font-['Poppins',Helvetica] text-3xl sm:text-4xl lg:text-[52px] leading-tight lg:leading-[65px] max-w-4xl">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-4 kinetic-word transform-gpu ${
                visibleWords.has(index) ? 'animate-kinetic-text' : 'opacity-0'
              } ${
                index >= 4 
                  ? 'font-medium italic text-gradient animate-gradient hover-scale transition-all duration-300 cursor-default' 
                  : 'font-medium text-white hover:text-[#ffffffcc] transition-colors duration-300'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                transform: visibleWords.has(index) 
                  ? 'translateX(0) rotate(0deg)' 
                  : `translateX(${index % 2 === 0 ? '-80px' : '80px'}) rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};