//import React from "react";

import { motion } from "framer-motion";

export const FeaturesSection = (): JSX.Element => {
  const features = [
    {
      number: "01",
      title: "Industry Expertise",
      description:
        "With experience across multiple industries including healthcare, retail, finance, and education, we provide solutions that meet your specific business needs.",
    },
    {
      number: "02",
      title: "Tailored Solutions",
      description:
        "Our team works closely with you to understand your goals and deliver personalized solutions that help your business grow.",
    },
    {
      number: "03",
      title: "Innovation at Core",
      description:
        "We embrace the latest technologies and trends to ensure your solutions are future-proof and competitive.",
    },
    {
      number: "04",
      title: "End-to-End Services",
      description:
        "From consultation and development to deployment and ongoing support, we provide complete services to ensure your success.",
    },
    {
      number: "05",
      title: "Proven Track Record",
      description:
        "We have a history of successful project deliveries, helping clients enhance their digital presence and achieve operational excellence.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#ffffff3d] text-white border border-white px-4 py-2 rounded-md text-sm font-medium">
            Why Choose Us?
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#1a1a1a] border border-[#333333] rounded-[20px] p-6 space-y-4"
              >
                <div className="text-[#ed1c24] font-bold text-xl">
                  {feature.number}
                </div>
                <h3 className="text-white font-semibold text-xl hover:text-[#ed1c24] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#ffffffb2] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
                className="bg-[#1a1a1a] border border-[#333333] rounded-[20px] p-6 space-y-4"
              >
                <div className="text-[#ed1c24] font-bold text-xl">
                  {feature.number}
                </div>
                <h3 className="text-white font-semibold text-xl hover:text-[#ed1c24] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#ffffffb2] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      </div>
    </section>
  );
};
