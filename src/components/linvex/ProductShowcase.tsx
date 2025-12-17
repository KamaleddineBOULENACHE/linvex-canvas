import { useState } from "react";
import { Wind, Cpu, Sprout } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("air");
  const sectionRef = useScrollReveal();

  const products = [
    {
      id: "air",
      name: "Linvex Air",
      icon: Wind,
      description: "Intelligent air quality monitoring and purification for healthy indoor environments.",
      features: ["HEPA Filtration", "Particle Sensor", "Auto Mode", "Silent Operation"],
      bgTexture: "mist",
    },
    {
      id: "hub",
      name: "Linvex Hub",
      icon: Cpu,
      description: "The central brain of your smart ecosystem. Multi-protocol gateway for unified control.",
      features: ["Multi-Protocol", "Edge Computing", "Local Processing", "Mesh Network"],
      bgTexture: "grid",
    },
    {
      id: "soil",
      name: "Linvex Soil",
      icon: Sprout,
      description: "Precision agriculture sensor for soil moisture, nutrients, and environmental monitoring.",
      features: ["NPK Sensor", "Moisture Level", "Temperature", "pH Monitoring"],
      bgTexture: "earth",
    },
  ];

  const activeProduct = products.find((p) => p.id === activeTab);

  return (
    <section id="products" className="py-24 lg:py-32 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <p className="text-eyebrow uppercase text-muted-foreground mb-4 tracking-widest">
            Products
          </p>
          <h2 className="text-heading md:text-display-sm text-foreground">
            Engineered for Excellence
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="inline-flex bg-card rounded-full p-1.5 border border-border">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`px-6 py-3 rounded-full text-body-sm font-medium transition-all duration-300 ${
                  activeTab === product.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product display */}
        <div className="relative max-w-4xl mx-auto scroll-reveal">
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 border border-border overflow-hidden">
            {/* Background texture */}
            <div className={`absolute inset-0 opacity-5 ${
              activeTab === "air" ? "bg-gradient-to-br from-background to-card" :
              activeTab === "hub" ? "bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px]" :
              "bg-gradient-to-t from-card to-background"
            }`} />

            <div className="relative flex flex-col lg:flex-row items-center gap-12">
              {/* Product visual */}
              <div className="flex-1 flex justify-center">
                <div className={`relative transition-all duration-500 ${activeTab !== products.find(p => p.id === activeTab)?.id ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                  {activeTab === "air" && (
                    <div className="w-48 h-64 rounded-3xl bg-gradient-to-b from-card to-muted border border-border shadow-elevated flex flex-col items-center justify-between py-8">
                      <div className="w-24 h-24 rounded-full border-4 border-border bg-background" />
                      <div className="w-16 h-2 rounded-full bg-border" />
                    </div>
                  )}
                  {activeTab === "hub" && (
                    <div className="w-40 h-40 rounded-full bg-foreground shadow-elevated flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-card border-4 border-border flex items-center justify-center">
                        <Cpu className="w-10 h-10 text-foreground" strokeWidth={1} />
                      </div>
                    </div>
                  )}
                  {activeTab === "soil" && (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-8 rounded-t-xl bg-foreground" />
                      <div className="w-6 h-32 bg-gradient-to-b from-foreground to-muted rounded-b-lg" />
                    </div>
                  )}

                  {/* Hotspots */}
                  {activeProduct?.features.slice(0, 2).map((feature, index) => (
                    <div
                      key={index}
                      className="absolute group"
                      style={{
                        left: index === 0 ? "-40px" : "auto",
                        right: index === 1 ? "-40px" : "auto",
                        top: `${30 + index * 40}%`,
                      }}
                    >
                      <div className="w-6 h-6 rounded-full bg-background border-2 border-foreground hotspot-pulse cursor-pointer flex items-center justify-center">
                        <span className="text-xs font-medium text-foreground">+</span>
                      </div>
                      <div className={`absolute top-1/2 -translate-y-1/2 ${index === 0 ? "right-full mr-2" : "left-full ml-2"} opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                        <span className="text-body-sm bg-foreground text-background px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  {activeProduct && <activeProduct.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />}
                  <h3 className="text-heading text-foreground">{activeProduct?.name}</h3>
                </div>
                <p className="text-body text-muted-foreground mb-8">
                  {activeProduct?.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {activeProduct?.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-surface text-body-sm text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
