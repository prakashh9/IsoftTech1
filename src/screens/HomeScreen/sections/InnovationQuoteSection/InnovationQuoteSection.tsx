import React, { useState, useEffect } from "react";

export const InnovationQuoteSection = (): JSX.Element => {
  const [quoteWords, setQuoteWords] = useState<string[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const words = [
      "Innovation",
      "is",
      "not",
      "just",
      "about",
      "creating",
      "new",
      "things;",
      "it's",
      "about",
      "reimagining",
      "what's",
      "possible"
    ];
    setQuoteWords(words);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords((prev) => new Set(prev).add(index));
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("innovation-quote");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="innovation-quote"
      className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] overflow-hidden"
    >
      <div className="w-[80%] max-w-6xl mx-auto relative">
        {/* Opening Quote Image */}
        <img
          src="/quote-red.png"
          alt="Opening quote"
          className="absolute top-0 left-0 w-8 sm:w-8 lg:w-12 animate-slide-in-left hover-scale transition-all duration-300"
        />

        <div className="px-8 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-16">
          <h3 className="font-['Poppins',Helvetica] font-normal text-white text-1xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-[1.2] lg:leading-[1.3] text-center max-w-5xl mx-auto">
            {quoteWords.map((word, index) => (
              <span
                key={index}
                className={`inline-block mr-3 kinetic-word transform-gpu ${
                  visibleWords.has(index)
                    ? "animate-kinetic-text"
                    : "opacity-0"
                } text-white transition-all duration-500 cursor-default`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  transform: visibleWords.has(index)
                    ? "translateY(0) scale(1)"
                    : `translateY(${index % 2 === 0 ? "30px" : "-30px"}) scale(0.8)`,
                  transition:
                    "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}
              >
                {word}
              </span>
            ))}
          </h3>
        </div>

        {/* Closing Quote Image */}
        <img
          src="/quote-red2.png"
          alt="Closing quote"
          className="absolute bottom-0 right-2 w-8 sm:w-8 lg:w-12 rotate-180 animate-slide-in-right hover-scale transition-all duration-300"
        />
      </div>
    </section>
  );
};
