import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      quote: "Linvex transformed how we manage our greenhouse operation. The precision data has increased our yield by 40%.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "GreenHarvest Farms",
    },
    {
      quote: "The unified ecosystem finally gave us control over our fragmented smart home setup. Everything just works.",
      author: "Marcus Webb",
      role: "Homeowner",
      company: "Early Adopter",
    },
    {
      quote: "Enterprise-grade reliability with consumer-level simplicity. Our building automation has never been more efficient.",
      author: "David Kim",
      role: "Facilities Manager",
      company: "Apex Properties",
    },
  ];

  const navigate = (direction: "prev" | "next") => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (direction === "next") {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => navigate("next"), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-eyebrow uppercase text-muted-foreground mb-4 tracking-widest">
            Testimonials
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground">
            Trusted by Innovators
          </h2>
        </div>

        <div className="max-w-4xl mx-auto scroll-reveal">
          <div className="relative">
            {/* Quote */}
            <div className={`text-center transition-all duration-300 ${isTransitioning ? "carousel-blur-out" : "carousel-blur-in"}`}>
              <blockquote className="text-heading md:text-display-sm font-extralight text-foreground mb-12 leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex flex-col items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center">
                  <span className="text-xl font-medium text-foreground">
                    {testimonials[activeIndex].author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                
                <div>
                  <p className="text-body font-medium text-foreground">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => navigate("prev")}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setActiveIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-foreground w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => navigate("next")}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
