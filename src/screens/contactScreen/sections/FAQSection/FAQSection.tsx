import  { useState } from "react";

export const FAQSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(3); // Default to 4th item (index 3)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive web development, mobile app development, UI/UX design, digital marketing, and custom software solutions tailored to your business needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typically, a standard website takes 2-4 weeks, while complex projects with custom features may take 6-12 weeks. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while enterprise solutions may require 8-16 weeks for complete development and testing.",
    },
    {
      question: "Can you help with website redesigns?",
      answer: "Yes! We specialize in redesigning websites to improve aesthetics, user experience, and performance. We work closely with you to ensure the redesign aligns with your business goals.",
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Absolutely! We offer comprehensive maintenance packages including security updates, content updates, performance optimization, and technical support to keep your website running smoothly.",
    },
    {
      question: "Are your websites mobile-friendly?",
      answer: "Yes, all our websites are fully responsive and optimized for mobile devices. We follow mobile-first design principles to ensure excellent user experience across all screen sizes.",
    },
    {
      question: "What is the cost of a website?",
      answer: "Website costs vary based on features and complexity. Basic websites start from $2,000, while custom enterprise solutions can range from $10,000+. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "What is the cost of a website?",
      answer: "Pricing depends on your specific needs. We offer flexible packages starting from $1,500 for simple sites up to $25,000+ for complex applications. Contact us for a personalized quote.",
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCardHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12 py-8 lg:py-12">
      <style >{`
        .faq-left-section {
          flex: 1;
          max-width: 480px;
          padding-top: 60px;
        }

        .faq-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: white;
          font-size: 36px;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .faq-subtitle {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .view-more-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: white;
          padding: 12px 24px;
          border-radius: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .view-more-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
          border-color: rgba(255, 255, 255, 0.8);
        }

        .faq-right-section {
          flex: 1;
          max-width: 680px;
        }

        .faq-container {
          height: 600px;
          background: transparent;
          border-radius: 16px;
          padding: 0;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .faq-container::-webkit-scrollbar {
          display: none;
        }

        .faq-card {
          background: transparent;
          border-radius: 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .faq-card.active {
          background: linear-gradient(135deg, rgba(237, 28, 36, 1) 0%, rgba(180, 20, 25, 1) 100%);
          color: white;
          transform: translateZ(20px) scale(1.02);
          box-shadow: 0 20px 40px rgba(237, 28, 36, 0.4);
          border: 1px solid rgba(237, 28, 36, 0.5);
        }

        .faq-card.hovered {
          transform: translateZ(15px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          z-index: 10;
          background: rgba(0, 0, 0, 0.3);
        }

        .faq-card.dimmed {
          filter: blur(2px) brightness(0.7);
          transform: translateZ(-10px) scale(0.95);
          opacity: 0.6;
        }

        .faq-question {
          padding: 16px 24px;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.5;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          color: white;
        }

        .faq-answer {
          padding: 0 24px 16px 24px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-answer.expanded {
          opacity: 1;
          max-height: 200px;
          padding-top: 8px;
        }

        .chevron {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 16px;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .chevron svg {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .faq-title {
            font-size: 28px;
          }

          .faq-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .faq-title {
            font-size: 24px;
          }

          .faq-subtitle {
            font-size: 14px;
          }

          .view-more-btn {
            padding: 10px 20px;
            font-size: 12px;
          }

          .faq-container {
            height: 450px;
          }

          .faq-question {
            padding: 20px;
            font-size: 14px;
          }

          .faq-answer {
            padding: 0 20px 20px 20px;
            font-size: 13px;
          }
          .faq-left-section {
            padding-top: 40px;
          }
        }
      `}</style>

      {/* Left side - Title and CTA */}
      <div className="faq-left-section mt-10 ">
        <h2 className="faq-title">
          Answers to Your Questions, Simplified
        </h2>

        <p className="faq-subtitle">
          Find quick solutions to common questions about our services
        </p>

        <button className="view-more-btn">
          View More
        </button>
      </div>

      {/* Right side - FAQ Scrollable Container */}
      <div className="faq-right-section">
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div
              key={`faq-item-${index}`}
              className={`faq-card ${
                activeIndex === index ? 'active' : ''
              } ${
                hoveredIndex === index ? 'hovered' : ''
              } ${
                hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''
              }`}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <div className={`chevron ${activeIndex === index ? 'rotated' : ''}`}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};