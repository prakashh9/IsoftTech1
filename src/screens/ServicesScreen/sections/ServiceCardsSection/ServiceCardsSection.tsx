import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServiceSection = (): JSX.Element => {
  // Service step data for mapping
  const serviceSteps = [
    {
      title: "Discovery",
      description:
        "Understanding the project requirements, goals, and user needs",
      iconSrc: "/business--products-business--chart--research.svg",
      bgGradient:
        "bg-[linear-gradient(319deg,rgba(23,23,23,1)_0%,rgba(60,60,60,1)_100%)]",
    },
    {
      title: "Wireframing",
      description:
        "Understanding the project requirements, goals, and user needs",
      iconSrc: "/business--products-document-checkmark.svg",
      bgGradient:
        "bg-[linear-gradient(313deg,rgba(60,60,60,1)_0%,rgba(26,26,26,1)_100%)]",
    },
    {
      title: "Development",
      description:
        "Understanding the project requirements, goals, and user needs",
      iconSrc: "/business--products-document-contract-edit-pen.svg",
      bgGradient:
        "bg-[linear-gradient(135deg,rgba(60,60,60,1)_0%,rgba(26,26,26,1)_100%)]",
    },
    {
      title: "Testing",
      description:
        "Understanding the project requirements, goals, and user needs",
      iconSrc: "/business--products-interaction--teamwork--group.svg",
      bgGradient:
        "bg-[linear-gradient(317deg,rgba(60,60,60,1)_0%,rgba(26,26,26,1)_100%)]",
    },
    {
      title: "Launch",
      description:
        "Understanding the project requirements, goals, and user needs",
      iconSrc: "/business--products-chart-loap.svg",
      bgGradient:
        "bg-[linear-gradient(317deg,rgba(60,60,60,1)_0%,rgba(26,26,26,1)_100%)]",
    },
  ];

  // Vector image positions
  const vectorImages = [
    {
      src: "/vector-7.svg",
      className: "top-[80px] left-[717px] absolute w-[109px] h-[333px]",
    },
    {
      src: "/vector-7.svg",
      className: "top-[80px] left-[188px] absolute w-[109px] h-[333px]",
    },
    {
      src: "/vector-5.svg",
      className: "top-[318px] left-[460px] absolute w-[109px] h-[333px]",
    },
    {
      src: "/vector-5.svg",
      className: "top-[321px] left-[976px] absolute w-[109px] h-[333px]",
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-16 flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
        {/* Background vector images */}
        <div className="hidden lg:block">
          {vectorImages.map((vector, index) => (
          <img
            key={`vector-${index}`}
            className={vector.className}
            alt="Vector"
            src={vector.src}
          />
          ))}
        </div>

        {/* Section header */}
        <div className="flex flex-col items-center gap-3.5 mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-[52px] font-semibold text-white text-center leading-tight md:leading-[56px] font-['Poppins',Helvetica] max-w-5xl px-4">
            <span className="animate-fade-in-up animate-delay-100 inline-block hover-rubber-band">Streamlined Process & </span>
            <span className="animate-fade-in-up animate-delay-300 inline-block hover-swing">Workflow for </span>
            <span className="animate-fade-in-up animate-delay-500 inline-block hover-bounce-text animate-text-glow">Seamless Project Execution</span>
          </h2>
          <p className="text-base md:text-lg font-normal text-white text-center leading-relaxed md:leading-[29px] font-['Poppins',Helvetica] max-w-lg px-4 animate-fade-in-up animate-delay-700 hover:animate-bounce-text">
            Our proven process and workflow ensure a smooth and efficient
            project from start to finish
          </p>
        </div>

        {/* Service steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {serviceSteps.map((step, index) => (
            <div
              key={`service-${index}`}
              className="flex flex-col items-center gap-[60px] hover-scale cursor-pointer"
            >
              <Card
                className={`w-full max-w-[237px] h-[200px] md:h-[237px] rounded-xl ${step.bgGradient} border-none mx-auto card-hover`}
              >
                <CardContent className="flex items-center justify-center h-full p-0">
                  <img
                    className="w-[80px] h-[80px] md:w-[108px] md:h-[108px] icon-bounce"
                    alt={step.title}
                    src={step.iconSrc}
                  />
                </CardContent>
              </Card>

              <div className="flex flex-col items-center gap-3 w-full">
                <h3 className="font-['Poppins',Helvetica] font-semibold text-white text-lg md:text-2xl text-center leading-6 md:leading-8 hover:text-[#ed1c24] transition-colors duration-300 animate-fade-in-up hover-rubber-band" style={{animationDelay: `${(index + 1) * 0.2}s`}}>
                  {step.title}
                </h3>
                <p className="font-['Poppins',Helvetica] font-normal text-white text-xs md:text-sm text-center leading-4 md:leading-5 px-2 animate-fade-in-up hover:animate-bounce-text" style={{animationDelay: `${(index + 1) * 0.3}s`}}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services badge */}
        
      </div>
    </section>
  );
};
