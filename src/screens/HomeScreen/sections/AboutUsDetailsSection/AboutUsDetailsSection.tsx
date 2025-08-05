import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutUsDetailsSection = (): JSX.Element => {
  const stats = [
    { number: "30 +", description: "Team Of Talented\nDevelopers And Designers" },
    { number: "80+", description: "Projects Completed And Delivered Successfully" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-6">
          <div className="flex-1 animate-slide-in-left">
            <h2 className="font-medium text-white text-2xl sm:text-4xl lg:text-[48px] font-['Poppins',Helvetica] mb-6 sm:mb-8 lg:mb-12 leading-tight animate-slide-in-up text-center sm:text-left">
  <div>
    <span className="text-white animate-gradient">Reliable</span>,{" "}
    <span className="hover:text-[#ed1c24] transition-colors duration-300">Scalable</span>, And
  </div>
  <div className="mt-2">
    <span className="text-white animate-gradient">Secure</span> IT Solutions
  </div>
</h2>

            <p className="opacity-80 font-normal text-white text-base sm:text-lg lg:text-xl font-['Poppins',Helvetica] leading-6 sm:leading-7 lg:leading-[30px] mb-8 sm:mb-12 lg:mb-16 animate-fade-in hover:opacity-100 transition-opacity duration-300">
              We deliver IT solutions engineered for stability, growth, and protection. Our systems are built to perform consistently under pressure, scale seamlessly with your business needs, and safeguard your data with the highest security standards
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="relative w-[120px] h-[110px] sm:w-[140px] sm:h-[130px] lg:w-[154px] lg:h-[143px] mx-auto sm:mx-0 animate-scale-in hover-scale transition-all duration-500">
                <div className="absolute w-full h-full top-0 left-0">
                  <div className="top-0 left-0 absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#c4c4c4] rounded-full animate-float hover-glow transition-all duration-300" />
                  <div className="top-0 right-0 absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#c4c4c4] rounded-full animate-float hover-glow transition-all duration-300" style={{animationDelay: '0.5s'}} />
                  <div className="bottom-0 left-0 absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#c4c4c4] rounded-full animate-float hover-glow transition-all duration-300" style={{animationDelay: '1s'}} />
                  <div className="bottom-0 right-0 absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#c4c4c4] rounded-full animate-float hover-glow transition-all duration-300" style={{animationDelay: '1.5s'}} />
                </div>
                <div className="absolute w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-solid border-[#ed1c24] animate-pulse-glow" />
                <img
  className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-[19px] lg:h-[19px] top-1/2 left-1/2 -translate-x-[9px] -translate-y-[9px]"
  alt="Ellipse"
  src="/ellipse-5.svg"
/>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 stagger-children">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-transparent border-0 hover-lift transition-all duration-300 group">
                    <CardContent className="flex flex-col w-full sm:w-[200px] lg:w-[239px] h-auto sm:h-[90px] lg:h-[105px] items-center sm:items-start gap-4 sm:gap-5 lg:gap-[22px] p-0">
                      <div className="font-semibold text-white text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',Helvetica] text-gradient animate-gradient group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="w-full sm:w-56 font-normal text-white text-sm sm:text-base font-['Plus_Jakarta_Sans',Helvetica] whitespace-pre-line text-center sm:text-left group-hover:text-[#ffffffcc] transition-colors duration-300">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-row gap-4 sm:gap-6 justify-center lg:justify-end animate-slide-in-right lg:flex-shrink-0 lg:min-w-[400px]">
            <img className="h-[250px] sm:h-[350px] lg:h-[478px] w-full sm:w-[250px] lg:w-[300px] object-cover rounded-lg hover-lift hover-glow transition-all duration-500 animate-fade-in" alt="Team members" src="/mask-group-4.png" />
            <img className="h-[250px] sm:h-[280px] lg:h-[353px] w-full sm:w-[250px] lg:w-[250px] object-cover rounded-lg hover-lift hover-glow transition-all duration-500 animate-fade-in" alt="Office space" src="/mask-group-5.png" style={{animationDelay: '0.3s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};