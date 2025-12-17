import { useState } from "react";
import { Home, Lock, Globe, Leaf, Lightbulb, Thermometer } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BentoGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  const cards = [
    {
      id: "home",
      title: "Home, Synchronized.",
      description: "Unified control for lighting, climate, and security. One ecosystem, infinite possibilities.",
      icon: Home,
      size: "large",
      visual: "floorplan",
    },
    {
      id: "access",
      title: "Secure Entry.",
      description: "Biometric and smart lock integration for seamless access control.",
      icon: Lock,
      size: "small",
      visual: "lock",
    },
    {
      id: "connectivity",
      title: "Deploy Anywhere.",
      description: "Global link via LTE/LoRaWAN. Post data to any endpoint.",
      icon: Globe,
      size: "small",
      visual: "network",
    },
    {
      id: "agriculture",
      title: "Precision Growth.",
      description: "Real-time soil and environmental metrics for optimal cultivation.",
      icon: Leaf,
      size: "wide",
      visual: "agriculture",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-eyebrow uppercase text-muted-foreground mb-4 tracking-widest">
            Features
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground">
            Three Pillars of Intelligence
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large card - Smart Home */}
          <div
            className="md:col-span-2 md:row-span-2 bento-card rounded-3xl bg-card p-8 lg:p-10 border border-border/50 shadow-inner-bevel scroll-reveal"
            onMouseEnter={() => setHoveredCard("home")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                  <Home className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-eyebrow uppercase text-muted-foreground tracking-widest">
                  Smart Home
                </p>
              </div>
              
              {/* Floorplan visualization */}
              <div className="flex-1 relative mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-full max-w-md h-auto">
                    {/* Room outlines */}
                    <rect x="10" y="10" width="80" height="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" />
                    <rect x="90" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" />
                    <rect x="10" y="70" width="140" height="70" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" />
                    <rect x="150" y="10" width="40" height="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-border" />
                    
                    {/* Light indicators */}
                    <circle cx="50" cy="40" r="4" className={`transition-all duration-500 ${hoveredCard === "home" ? "fill-foreground" : "fill-muted"}`} />
                    <circle cx="120" cy="40" r="4" className={`transition-all duration-700 ${hoveredCard === "home" ? "fill-foreground" : "fill-muted"}`} />
                    <circle cx="80" cy="105" r="5" className={`transition-all duration-900 ${hoveredCard === "home" ? "fill-foreground" : "fill-muted"}`} />
                    <circle cx="170" cy="75" r="4" className={`transition-all duration-1100 ${hoveredCard === "home" ? "fill-foreground" : "fill-muted"}`} />
                    
                    {/* Room labels */}
                    <text x="50" y="55" textAnchor="middle" className="text-[8px] fill-muted-foreground">Living</text>
                    <text x="120" y="55" textAnchor="middle" className="text-[8px] fill-muted-foreground">Kitchen</text>
                    <text x="80" y="120" textAnchor="middle" className="text-[8px] fill-muted-foreground">Master</text>
                    <text x="170" y="90" textAnchor="middle" className="text-[8px] fill-muted-foreground">Bath</text>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-heading text-foreground mb-2">Home, Synchronized.</h3>
              <p className="text-body text-muted-foreground">
                Unified control for lighting, climate, and security. One ecosystem, infinite possibilities.
              </p>
            </div>
          </div>

          {/* Small card - Access */}
          <div
            className="bento-card rounded-3xl bg-card p-8 border border-border/50 shadow-inner-bevel scroll-reveal"
            onMouseEnter={() => setHoveredCard("access")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                <Lock className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Lock visualization */}
            <div className="flex justify-center my-6">
              <div className={`w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center transition-transform duration-500 ${hoveredCard === "access" ? "rotate-12" : ""}`}>
                <Lock className="w-8 h-8 text-background" strokeWidth={1.5} />
              </div>
            </div>
            
            <h3 className="text-subheading text-foreground mb-2">Secure Entry.</h3>
            <p className="text-body-sm text-muted-foreground">
              Biometric and smart lock integration.
            </p>
          </div>

          {/* Small card - Connectivity */}
          <div
            className="bento-card rounded-3xl bg-card p-8 border border-border/50 shadow-inner-bevel scroll-reveal"
            onMouseEnter={() => setHoveredCard("connectivity")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                <Globe className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Network visualization */}
            <div className="flex justify-center my-6">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-foreground" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full bg-muted transition-all duration-300 ${hoveredCard === "connectivity" ? "opacity-100" : "opacity-40"}`}
                    style={{
                      left: `${16 + Math.cos(angle * Math.PI / 180) * 30}px`,
                      top: `${16 + Math.sin(angle * Math.PI / 180) * 30}px`,
                      transitionDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
            
            <h3 className="text-subheading text-foreground mb-2">Deploy Anywhere.</h3>
            <p className="text-body-sm text-muted-foreground">
              Global link via LTE/LoRaWAN.
            </p>
          </div>

          {/* Wide card - Agriculture */}
          <div
            className="md:col-span-3 bento-card rounded-3xl bg-card p-8 lg:p-10 border border-border/50 shadow-inner-bevel scroll-reveal"
            onMouseEnter={() => setHoveredCard("agriculture")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <p className="text-eyebrow uppercase text-muted-foreground tracking-widest">
                    Agriculture
                  </p>
                </div>
                <h3 className="text-heading text-foreground mb-4">Precision Growth.</h3>
                <p className="text-body text-muted-foreground max-w-lg">
                  Real-time soil and environmental metrics for optimal cultivation. 
                  Monitor humidity, temperature, and nutrient levels across your entire operation.
                </p>
              </div>
              
              {/* Data visualization */}
              <div className="flex-1 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <Thermometer className={`w-8 h-8 transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`} strokeWidth={1} />
                  <span className={`text-display-sm font-extralight transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`}>24°</span>
                  <span className="text-body-sm text-muted-foreground">Temp</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Lightbulb className={`w-8 h-8 transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`} strokeWidth={1} />
                  <span className={`text-display-sm font-extralight transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`}>78%</span>
                  <span className="text-body-sm text-muted-foreground">Humidity</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Leaf className={`w-8 h-8 transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`} strokeWidth={1} />
                  <span className={`text-display-sm font-extralight transition-all duration-500 ${hoveredCard === "agriculture" ? "text-foreground" : "text-muted"}`}>6.2</span>
                  <span className="text-body-sm text-muted-foreground">pH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
