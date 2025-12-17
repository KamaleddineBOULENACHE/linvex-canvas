import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
      {/* Animated background ripples */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ripple-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ripple-bg" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ripple-bg" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal-stagger">
          {/* Eyebrow */}
          <p className="text-eyebrow uppercase text-muted-foreground mb-6 tracking-widest">
            Smart IoT & Automation
          </p>

          {/* Main headline */}
          <h1 className="text-display md:text-[6rem] font-extralight text-foreground mb-8 leading-none tracking-tighter">
            Intelligence,<br />Embedded.
          </h1>

          {/* Subheadline */}
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto mb-12 font-normal">
            Practical IoT solutions for homes, industry, and agriculture. 
            Turning complex data into simple actions.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background transition-all duration-300 rounded-full px-8 py-6 text-base group"
            >
              Explore Systems
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Floating product visual */}
        <div className="mt-20 flex justify-center">
          <div className="relative float">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-card to-muted shadow-elevated flex items-center justify-center">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-foreground shadow-inner-bevel" />
            </div>
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-full bg-foreground/5 blur-3xl scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
