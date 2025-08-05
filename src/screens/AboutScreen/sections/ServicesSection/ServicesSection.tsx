import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ServicesSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const stats = [
    {
      value: "200+",
      label: "Projects Completed",
    },
    {
      value: "95%",
      label: "Client Retention Rate",
    },
    {
      value: "39+",
      label: "Awards won",
    },
    {
      value: "50+",
      label: "Team Member",
    },
  ];

  return (
    <Card className="w-full max-w-[1137px] h-auto lg:h-[177px] mx-auto rounded-md border-[0.75px] border-solid border-[#181d20] overflow-hidden relative animate-scale-in animate-delay-300 hover-lift">
      <div className="relative w-full h-full">
        {/* Background images */}
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="absolute w-[587px] h-[105px] top-0 left-0"
            alt="Background rectangle"
            src="/-rect--2.png"
          />
          <img
            className="absolute w-[472px] h-[169px] top-0 right-0"
            alt="Background rectangle"
            src="/-rect--2.png"
          />
          <img
            className="absolute w-full h-full top-0 left-0"
            alt="Glass overlay"
            src="/glass.png"
          />
        </div>

        {/* Stats content */}
        <CardContent className="relative flex flex-col sm:flex-row justify-between items-center h-full px-4 sm:px-8 lg:px-16 py-8 lg:py-0 gap-6 sm:gap-4 lg:gap-0">
          {stats.map((stat, index) => (
            <React.Fragment key={`stat-${index}`}>
              <div className={`flex flex-col items-center justify-center animate-bounce-in animate-delay-${400 + index * 100} hover-scale scroll-fade-up scroll-stagger-${index + 1}`}>
                <div className="font-normal text-[39px] text-white tracking-[-0.78px] leading-[46.8px] font-['Poppins',Helvetica] hover:text-gradient-animate transition-all duration-500 kinetic-text">
                  {stat.value}
                </div>
                <div className="font-normal text-[15px] text-white text-center tracking-[-0.30px] leading-[22.2px] font-['Poppins',Helvetica] mt-1 hover:text-[#ff6b6b] transition-colors duration-300 loading-text">
                  {stat.label}
                </div>
              </div>

              {/* Add separator between stats except after the last one */}
              {index < stats.length - 1 && index === 1 && (
                <Separator
                  orientation="horizontal"
                  className="w-full sm:hidden bg-[#d9d9d9]"
                />
              )}
              {index < stats.length - 1 && (
                <Separator
                  orientation="vertical" 
                  className="h-[76px] bg-[#d9d9d9] hidden sm:block"
                />
              )}
            </React.Fragment>
          ))}
        </CardContent>
      </div>
    </Card>
  );
};
