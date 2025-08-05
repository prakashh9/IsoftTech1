import  { useEffect, useState } from "react";
//import { Badge } from "../../components/ui/badge";
import { AboutUsDetailsSection } from "./sections/AboutUsDetailsSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ClientFeedbackSection } from "./sections/ClientFeedbackSection";
import { ClientTestimonialsSection } from "./sections/ClientTestimonialsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { InnovationQuoteSection } from "./sections/InnovationQuoteSection";
import { ServiceHighlightsSection } from "./sections/ServiceHighlightsSection";
//import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { ServicesSection } from "./sections/ServicesSection";
//import { NewsletterSection } from "../contactScreen/sections/NewsletterSection";
import {  NewsletterSection } from "../contactScreen/sections/NewsletterSection/NewsletterSection";

export const HomeScreen = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set(prev).add(entry.target.id));
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const cleanup = observeElements();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cleanup();
    };
  }, []);

  return (
    <>
    <div className="bg-[#0b0b0b] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#0b0b0b] overflow-hidden w-full relative">
        {/* Parallax Background Elements */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#ed1c24]/10 to-[#8b0000]/10 rounded-full blur-3xl top-1/4 left-1/4 animate-float" />
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-[#ed1c24]/5 to-[#8b0000]/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-float" style={{animationDelay: '1s'}} />
        </div>

        {/* Hero Section with Logo */}
        <div 
          className="relative w-full mb-16 z-10"
          data-animate
          id="hero-section"
          style={{
            transform: visibleElements.has('hero-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(50px) scale(0.95)',
            opacity: visibleElements.has('hero-section') ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <HeroSection />
          <div 
            className="absolute w-full max-w-[840px] h-auto top-[300px] sm:top-[400px] lg:top-[479px] right-0 overflow-hidden"
            
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[505px] ">
              <img className="absolute w-full max-w-[672px] h-full top-0 right-0 lg:left-[168px] " alt="Vector" src="/vector.svg" />
              <div 
                className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] top-[100px] sm:top-[140px] lg:top-[168px] right-[50px] sm:right-[100px] lg:left-[504px] bg-[#ffffff14] "
                
              />
              <div 
                className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] top-0 right-[50px] sm:right-[100px] lg:left-[168px] bg-[#ffffff14] " 
                
              />
              <div 
                className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] bottom-0 right-[200px] sm:right-[250px] lg:left-0 bg-[#ffffff14] " 
                
              />
              <div 
                className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[168px] lg:h-[168px] bottom-0 right-[50px] sm:right-[100px] lg:left-[336px] bg-[#ffffff14] " 
                
              />
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div 
          className="relative w-full z-10"
          data-animate
          id="about-section"
          style={{
            transform: visibleElements.has('about-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(80px) scale(0.9)',
            opacity: visibleElements.has('about-section') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
          }}
        >
          <AboutUsSection />
          <div 
            className="absolute w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] lg:w-[577px] lg:h-[347px] right-0 rounded-[288.5px/173.5px] -rotate-90 blur-[50px] sm:blur-[80px] lg:blur-[107.3px] bg-[linear-gradient(349deg,rgba(255,0,4,1)_0%,rgba(142,0,0,1)_64%,rgba(255,0,81,1)_100%)] animate-gradient transform-gpu"
            style={{
              transform: `translateY(${scrollY * 0.3}px) rotate(${-90 + scrollY * 0.05}deg)`,
            }}
          />
        </div>

        {/* Innovation Quote Section */}
        <div 
          data-animate
          id="innovation-section"
          style={{
            transform: visibleElements.has('innovation-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(60px) scale(0.95)',
            opacity: visibleElements.has('innovation-section') ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
          }}
        >
          <InnovationQuoteSection />
        </div>

        {/* Service Highlights and Services Section */}
        <div 
          className="relative w-full z-10"
          data-animate
          id="services-section"
          style={{
            transform: visibleElements.has('services-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(100px) scale(0.9)',
            opacity: visibleElements.has('services-section') ? 1 : 0,
            transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
          }}
        >
          <ServiceHighlightsSection />
          <ServicesSection />
          <div 
            className="absolute w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] lg:w-[577px] lg:h-[347px] left-[-200px] sm:left-[-300px] lg:left-[-414px] rounded-[288.5px/173.5px] -rotate-90 blur-[50px] sm:blur-[80px] lg:blur-[107.3px] bg-[linear-gradient(349deg,rgba(0,0,0,1)_0%,rgba(101,0,0,1)_64%,rgba(163,31,73,1)_100%)] animate-gradient transform-gpu"
            style={{
              transform: `translateY(${scrollY * -0.2}px) rotate(${-90 - scrollY * 0.03}deg)`,
            }}
          />
        </div>

        {/* Client Testimonials Section */}
        <div 
          className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 z-10 relative"
          data-animate
          id="testimonials-section"
          style={{
            transform: visibleElements.has('testimonials-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(80px) scale(0.95)',
            opacity: visibleElements.has('testimonials-section') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s'
          }}
        >
          <div className="w-full max-w-none mx-auto">
            <ClientTestimonialsSection />
          </div>
        </div>

        {/* About Us Details Section - removed the badge from here */}
        <div 
          className="relative w-full z-10"
          data-animate
          id="details-section"
          style={{
            transform: visibleElements.has('details-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(100px) scale(0.9)',
            opacity: visibleElements.has('details-section') ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s'
          }}
        >
          <AboutUsDetailsSection />
          <div 
            className="absolute w-[300px] h-[180px] sm:w-[400px] sm:h-[240px] lg:w-[577px] lg:h-[347px] right-0 rounded-[288.5px/173.5px] -rotate-90 blur-[50px] sm:blur-[80px] lg:blur-[107.3px] bg-[linear-gradient(349deg,rgba(85,0,1,1)_0%,rgba(33,0,0,1)_64%,rgba(157,3,52,1)_100%)] animate-gradient transform-gpu"
            style={{
              transform: `translateY(${scrollY * 0.25}px) rotate(${-90 + scrollY * 0.04}deg)`,
            }}
          />
        </div>

        {/* Client Feedback Section */}
        <div 
          className="relative w-full z-10"
          data-animate
          id="feedback-section"
          style={{
            transform: visibleElements.has('feedback-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(80px) scale(0.95)',
            opacity: visibleElements.has('feedback-section') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.7s'
          }}
        >
          <ClientFeedbackSection />
          <div 
            className="absolute w-[250px] h-[150px] sm:w-[350px] sm:h-[210px] lg:w-[497px] lg:h-[299px] left-[-150px] sm:left-[-250px] lg:left-[-398px] rounded-[248.5px/149.5px] -rotate-90 blur-[50px] sm:blur-[80px] lg:blur-[107.3px] bg-[linear-gradient(349deg,rgba(255,0,4,1)_0%,rgba(142,0,0,1)_64%,rgba(255,0,81,1)_100%)] animate-gradient transform-gpu"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${-90 - scrollY * 0.02}deg)`,
            }}
          />
        </div>

        {/* Features Section */}
        <div 
          data-animate
          id="features-section"
          style={{
            transform: visibleElements.has('features-section') 
              ? 'translateY(0) scale(1)' 
              : 'translateY(100px) scale(0.9)',
            opacity: visibleElements.has('features-section') ? 1 : 0,
            transition: 'all 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
          }}
        >
          <FeaturesSection />
        </div>

        {/* Services Overview Section */}
        
      </div>
    </div>
    <NewsletterSection />

    </>
  );
};