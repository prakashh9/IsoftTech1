import React from "react";

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto">
      <div className="relative h-full">
        {/* About Us Section */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1134px] mx-auto">
            <h1 className="text-[39px] font-semibold text-white text-center leading-[42px] font-['Poppins',Helvetica] mb-[60px] animate-zoom-in animate-delay-400 hover:text-gradient-animate kinetic-text">
              About Us
            </h1>

            <div className="font-['Poppins',Helvetica] font-normal text-white text-[15px] leading-[25.8px] text-left space-y-4">
              <p className="animate-slide-in-left animate-delay-500 loading-text">
              At Integrated SoftTech, we&apos;re more than just
              developers—we&apos;re innovators, problem-solvers, and creative
              thinkers shaping the future of technology. Headquartered in the
              vibrant city of Dubai, we specialize in building scalable software
              systems, intuitive web and mobile applications, and intelligent
              enterprise solutions that drive real-world impact.
              </p>
              <p className="animate-slide-in-right animate-delay-600 loading-text">
              Our story began with a clear mission: to empower businesses by
              leveraging modern technologies and reimagining what&#39;s possible
              through digital transformation. From our earliest days, we&apos;ve
              been focused on turning bold ideas into robust, user-centric
              solutions—one breakthrough at a time.
              </p>
              <p className="animate-slide-in-left animate-delay-700 loading-text">
              Backed by a team of skilled engineers, designers, and strategists,
              Integrated SoftTech thrives on complexity and innovation. We take
              pride in crafting seamless user experiences, optimizing systems
              for performance, and embedding intelligence into everything we
              build—whether it&#39;s a dynamic web platform or a full-fledged
              AI-powered solution.
              </p>
              <p className="animate-slide-in-right animate-delay-800 loading-text">
              At Integrated SoftTech, we don&apos;t just deliver projects—we
              build partnerships. Our success is rooted in long-term client
              relationships, exceptional delivery standards, and a constant
              drive to stay ahead in an ever-evolving digital landscape. With
              every solution we craft, we aim to make technology more human,
              purposeful, and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
