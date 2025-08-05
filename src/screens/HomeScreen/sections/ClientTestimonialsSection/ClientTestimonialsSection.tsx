import React, { useState, useEffect } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ClientTestimonialsSection = (): JSX.Element => {
  const [approachWords, setApproachWords] = useState<string[]>([]);
  const [visibleWords, setVisibleWords] = useState<Set<number>>(new Set());

  useEffect(() => {
    const words = ["Discover", "Innovate", "and", "Transform"];
    setApproachWords(words);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords((prev) => new Set(prev).add(index));
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("client-testimonials");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const backgroundRects = [
    {
      className: "w-full sm:w-[600px] lg:w-[783px] h-[100px] sm:h-[120px] lg:h-[140px] top-0 left-0",
      alt: "Rect",
    },
    {
      className: "w-full sm:w-[500px] lg:w-[629px] h-[150px] sm:h-[180px] lg:h-[225px] top-0 right-0",
      alt: "Rect",
    },
    {
      className: "w-full sm:w-[480px] lg:w-[608px] h-[80px] sm:h-[100px] lg:h-[123px] bottom-0 left-0",
      alt: "Rect",
    },
  ];

  return (
    <section id="client-testimonials" className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-none mx-auto">
        <div className="flex justify-center mb-8 animate-slide-in-up">
          <Badge className="flex items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[#ffffff3d] rounded-[10px] border-[0.5px] border-solid border-white hover-glow transition-all duration-300">
            <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
              Our Approach
            </span>
          </Badge>
        </div>

        <Card className="w-full rounded-lg overflow-hidden border border-solid border-[#181d20] relative hover-lift hover-glow transition-all duration-500 group">
          <div className="relative">
            <div className="relative h-[300px] sm:h-[350px] lg:h-[367px]">
              {backgroundRects.map((rect, index) => (
                <img
                  key={`rect-${index}`}
                  className={`absolute ${rect.className} object-cover animate-fade-in group-hover:scale-105 transition-transform duration-700`}
                  alt={rect.alt}
                  src="/-rect--4.png"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              ))}
              <img
                className="absolute w-full h-full top-0 left-0 object-cover animate-fade-in group-hover:opacity-80 transition-opacity duration-500"
                alt="Glass"
                src="/glass-1.png"
              />
            </div>

            <CardContent className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-5 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 z-10">
              <h2 className="font-['Poppins',Helvetica] font-normal text-white text-2xl sm:text-4xl lg:text-[52px] tracking-[-0.5px] sm:tracking-[-0.8px] lg:tracking-[-1.04px] leading-tight sm:leading-[50px] lg:leading-[62.4px] text-center max-w-4xl group-hover:scale-105 transition-transform duration-500">
                {approachWords.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-3 kinetic-word transform-gpu ${
                      visibleWords.has(index) ? "animate-kinetic-text" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${index * 0.3}s`,
                      transform: visibleWords.has(index)
                        ? "translateY(0) scale(1) rotate(0deg)"
                        : `translateY(${index % 2 === 0 ? "-50px" : "50px"}) scale(0.7) rotate(${
                            index % 2 === 0 ? "-10deg" : "10deg"
                          })`,
                      transition: "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {word}
                    {index < approachWords.length - 1 && index !== 2
                      ? ","
                      : index === 2
                      ? ""
                      : "."}
                  </span>
                ))}
              </h2>

              <p className="w-full max-w-[500px] sm:max-w-[550px] lg:max-w-[582px] font-['Poppins',Helvetica] font-normal text-[#a6a9a8] text-base sm:text-lg lg:text-xl text-center tracking-[-0.20px] sm:tracking-[-0.30px] lg:tracking-[-0.40px] leading-6 sm:leading-7 lg:leading-[29.6px] animate-fade-in group-hover:text-[#ffffffcc] transition-colors duration-500">
                A streamlined process designed to uncover opportunities, craft tailored solutions, and deliver real impact.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};
