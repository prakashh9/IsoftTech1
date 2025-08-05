//import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <Card className="w-full h-auto min-h-[300px] md:h-[412px] rounded-xl overflow-hidden border-none bg-[#ffffff03] mx-4 card-hover">
      <CardContent className="p-0 relative h-full">
        <div className="relative w-full h-full">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url(/ellipse-2.svg)] bg-cover bg-center">
            <img
              className="absolute w-full h-full md:h-[359px] bottom-0 left-0 object-cover"
              alt="Ellipse"
              src="/ellipse-1.svg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center h-full py-12 sm:py-16 md:py-20">
  <div className="flex flex-col items-center gap-6 max-w-[716px] px-4 sm:px-6 md:px-8">
    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[52px] leading-snug sm:leading-[40px] md:leading-[56px] font-semibold text-center tracking-[0] font-['Poppins',Helvetica] bg-[linear-gradient(76deg,rgba(255,255,255,1)_0%,rgba(50,50,50,1)_100%)] bg-clip-text text-transparent">
      <span className="animate-fade-in-up animate-delay-200 inline-block hover-rubber-band">
        Start Your Journey
      </span>
      <br />
      <span className="animate-fade-in-up animate-delay-400 inline-block hover-swing animate-text-glow">
        with Us Today
      </span>
    </h2>

    <Button
      className="px-6 py-3 bg-neutral-900 rounded-[10px] shadow-[inset_4px_4px_10px_#ffffff4c] backdrop-blur-[10px] button-hover animate-zoom-in animate-delay-600 hover-bounce-text"
      size="lg"
    >
      <span className="font-body-large-medium text-white text-sm sm:text-base md:text-lg">
        Get Started
      </span>
    </Button>
  </div>
</div>

        </div>
      </CardContent>
    </Card>
  );
};
