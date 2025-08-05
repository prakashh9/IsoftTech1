//import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-4 sm:py-6 lg:py-8 xl:py-10 text-center animate-fade-in-up mt-8">
      <h1 className="font-['Poppins',Helvetica] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight lg:leading-[56px] xl:leading-[72px] tracking-normal mb-4 lg:mb-6 max-w-3xl lg:max-w-4xl xl:max-w-5xl animate-text-slide-up">
        <span className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Let&apos;s Connect and</span>
        <span className="font-semibold italic animate-text-glow text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"> Build Something Great</span>
      </h1>

      <p className="font-['Poppins',Helvetica] text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-5 lg:leading-6 xl:leading-7 max-w-lg lg:max-w-xl xl:max-w-2xl px-4 animate-fade-in-delayed">
        Have questions or a project in mind? Reach out to us today and
        let&apos;s create innovative solutions together
      </p>
    </section>
  );
};
