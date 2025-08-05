import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsletterSection = (): JSX.Element => {
  const values = [
    {
      value: ".  Integrity",
      description:
        "We believe in honesty, transparency, and building trust with our clients.",
    },
    {
      value: ".  Innovation",
      description:
        "Constantly pushing the boundaries of technology to create groundbreaking solutions.",
    },
    {
      value: ".  Collaboration",
      description:
        "Working together with our clients to deliver the best results.",
    },
    {
      value: ".  Excellence",
      description:
        "Delivering top-quality products and services that exceed client expectations.",
    },
  ];

  return (
    <Card
  className="relative w-full max-w-[418px]  h-[500px]bg-transparent border-none px-4 lg:px-0 mb-20 transform -translate-x-4 animate-fade-in-right animate-delay-300"
>

      {/* ↑ added `mb-16` for margin bottom and `-ml-4` to shift slightly left */}

      <div className="flex justify-end mb-4 animate-fade-in-up animate-delay-400">
        <Badge className="bg-[#ffffff3d] text-white border border-white text-xs py-[3.75px] px-[7.5px] pr-10px rounded-[7.5px] mr-8 hover-glow hover-scale">
          Our Values
        </Badge>
      </div>

      <CardContent className="p-0 mb-4">
        <div className="font-['Poppins',Helvetica] font-normal text-white text-[15px] leading-[25.8px] space-y-2">
          {values.map((item, index) => (
            <div
              key={index}
              className={`animate-fade-in-up animate-delay-${
                500 + index * 100
              } hover:text-[#ff6b6b] transition-colors duration-300`}
            >
              <span className="font-medium hover:text-gradient-animate">
                {item.value}  :
              </span>{" "}
              <span className="hover:text-[#ffffff99]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
