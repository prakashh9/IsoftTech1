import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const TransformingBusinessesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto animate-slide-in-bottom animate-delay-200">
      <Card className="bg-transparent border-none hover-lift">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col space-y-6 lg:max-w-[655px]">
              <Badge className="w-fit bg-[#ffffff3d] text-white border-[0.38px] border-white rounded-[7.5px] px-[7.5px] py-[3.75px] font-normal text-xs animate-slide-in-left animate-delay-300 hover-glow hover-scale scroll-fade-left scroll-stagger-1">
                Our Mission
              </Badge>

              <h2 className="font-['Poppins',Helvetica] font-normal text-white text-[39px] leading-[50.7px] animate-slide-in-left animate-delay-400 hover:text-gradient-animate transition-all duration-500 kinetic-text scroll-fade-left scroll-stagger-2">
                Transforming Businesses with Cutting-Edge Technology
              </h2>

              <p className="font-['Poppins',Helvetica] font-normal text-white text-[15px] leading-[25.8px] animate-slide-in-left animate-delay-500 loading-text scroll-fade-left scroll-stagger-3">
                Our mission is simple: to empower businesses by providing
                cutting-edge, tailor-made technology solutions that solve
                real-world challenges. We strive to deliver exceptional value by
                combining deep technical expertise, creative problem-solving,
                and a relentless commitment to quality.
              </p>
            </div>

            <div className="lg:ml-auto animate-slide-in-right animate-delay-600 scroll-scale-in scroll-stagger-4">
              <img
                className="w-full max-w-[438px] h-auto object-cover hover-scale animate-float"
                alt="Team collaborating on technology solutions"
                src="/group-2-1.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
