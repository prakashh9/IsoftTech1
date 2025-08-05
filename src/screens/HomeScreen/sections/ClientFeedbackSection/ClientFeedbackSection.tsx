import { MessageSquareIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  { id: 1, text: "Partnering with this team was the best decision we made. Their innovative approach transformed our business operations and boosted our efficiency by 40%.", author: "Jessica L", position: "CEO of Nexus Corp", avatar: "/mask-group.png", comments: "12" },
  { id: 2, text: "Their commitment to understanding our vision and delivering tailored solutions was unmatched. We've seen remarkable growth since working with them", author: "David M", position: "Founder of BrightPath", avatar: "/mask-group-2.png", comments: "15" },
  { id: 3, text: "From the initial consultation to the final implementation, this team has exceeded our expectations at every stage. Their expertise in crafting strategies and executing.", author: "Sophia T", position: "Director at Innovate", avatar: "/mask-group-1.png", comments: "19" },
  { id: 4, text: "Working with this team has been an absolute game-changer for our company. Their ability to combine creativity with practicality resulted in solutions that perfectly met our unique needs.", author: "Michael R", position: "COO of FutureTech", avatar: "/mask-group-3.png", comments: "5" },
];

export const ClientFeedbackSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[80%] max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-in-up">
          <h2 className="[font-family:'Poppins',Helvetica] text-2xl sm:text-4xl lg:text-[52px] leading-tight sm:leading-[60px] lg:leading-[85px] text-white">
            What Our Client Says About<br />
            <span className="font-medium italic text-gradient animate-gradient hover-scale transition-all duration-300 cursor-default">Integrated SoftTech</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 stagger-children">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#ffffff0d] border-[#ffffff1a] backdrop-blur-[30px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] hover-lift hover-glow transition-all duration-500 group cursor-pointer">
              <CardContent className="p-0">
                <div className="relative w-full h-full p-6 sm:p-8 lg:p-12">
                  <div className="flex mb-6 sm:mb-8 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <img key={`star-${testimonial.id}-${i}`} className="w-4 h-4 sm:w-5 sm:h-[19px] mr-3 sm:mr-[17px] animate-float hover-scale transition-all duration-300" alt="Star" src="/star-3.svg" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>

                  <p className="[font-family:'Poppins',Helvetica] font-light text-[#ffffffb2] text-sm sm:text-base leading-6 sm:leading-[30px] mb-6 sm:mb-8 group-hover:text-[#ffffffcc] transition-colors duration-300">
                    "{testimonial.text}"
                  </p>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center">
                      <img className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[71px] lg:h-[71px] rounded-full object-cover hover-scale transition-all duration-300 animate-float" alt="Client avatar" src={testimonial.avatar} />
                      <div className="ml-4 sm:ml-6 lg:ml-[30px]">
                        <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-base sm:text-lg lg:text-xl leading-6 sm:leading-[30px] group-hover:text-[#ed1c24] transition-colors duration-300">{testimonial.author}</div>
                        <div className="[font-family:'Poppins',Helvetica] font-light text-[#ffffffb2] text-sm sm:text-base leading-6 sm:leading-[30px] group-hover:text-[#ffffffcc] transition-colors duration-300">{testimonial.position}</div>
                      </div>
                    </div>

                    <div className="flex items-center group-hover:scale-110 transition-transform duration-300">
                      <span className="[font-family:'Poppins',Helvetica] font-light text-[#ffffffa1] text-sm sm:text-base leading-6 sm:leading-[30px] mr-2 sm:mr-3 group-hover:text-[#ed1c24] transition-colors duration-300">{testimonial.comments}</span>
                      <MessageSquareIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffffa1] group-hover:text-[#ed1c24] transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};